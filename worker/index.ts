/**
 * Cloudflare Worker for handling contact form submissions
 * Sends emails via Resend API
 */

interface ContactFormData {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  turnstileToken?: string;
  type?: string; // 'job_application' for job applications
  jobTitle?: string;
  jobId?: string;
  resume?: {
    filename: string;
    content: string; // base64 encoded
    type: string;
  };
}

interface Env {
  RESEND_API_KEY: string;
  RECIPIENT_EMAILS: string; // Comma-separated list of recipient email addresses
  FROM_EMAIL: string; // Email address to send from (must be verified in Resend)
  TURNSTILE_SECRET_KEY?: string; // Cloudflare Turnstile secret key
  ADMIN_USERNAME: string; // Admin username (stored as secret)
  ADMIN_PASSWORD: string; // Admin password (stored as secret)
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // CORS headers helper
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Route to appropriate handler
    if (pathname === '/api/contact') {
      return handleContactForm(request, env, corsHeaders);
    } else if (pathname === '/api/admin/login') {
      return handleAdminLogin(request, env, corsHeaders);
    } else if (pathname === '/api/admin/verify') {
      return handleAdminVerify(request, env, corsHeaders);
    } else {
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }
  },
};

// Admin login handler
async function handleAdminLogin(request: Request, env: Env, corsHeaders: Record<string, string>): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  }

  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return new Response(
        JSON.stringify({ error: 'Username and password are required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Check credentials against environment secrets
    if (!env.ADMIN_USERNAME || !env.ADMIN_PASSWORD) {
      return new Response(
        JSON.stringify({ error: 'Admin credentials not configured' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    if (username !== env.ADMIN_USERNAME || password !== env.ADMIN_PASSWORD) {
      return new Response(
        JSON.stringify({ error: 'Invalid username or password' }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Generate a simple token (in production, use JWT or similar)
    const token = generateToken(username);
    const expiry = Date.now() + (24 * 60 * 60 * 1000); // 24 hours

    return new Response(
      JSON.stringify({
        success: true,
        token,
        expiry,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
}

// Admin token verification handler
async function handleAdminVerify(request: Request, env: Env, corsHeaders: Record<string, string>): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  }

  try {
    const body = await request.json();
    const { token, expiry } = body;

    if (!token || !expiry) {
      return new Response(
        JSON.stringify({ valid: false, error: 'Token and expiry are required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Check if token is expired
    if (Date.now() > parseInt(expiry)) {
      return new Response(
        JSON.stringify({ valid: false, error: 'Token expired' }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Verify token format (simple check - in production, use proper JWT verification)
    if (!verifyToken(token)) {
      return new Response(
        JSON.stringify({ valid: false, error: 'Invalid token' }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ valid: true }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        valid: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
}

// Simple token generation (in production, use JWT)
function generateToken(username: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return btoa(`${username}:${timestamp}:${random}`).replace(/[^a-zA-Z0-9]/g, '');
}

// Simple token verification
function verifyToken(token: string): boolean {
  try {
    const decoded = atob(token);
    return decoded.split(':').length === 3;
  } catch {
    return false;
  }
}

// Contact form handler
async function handleContactForm(request: Request, env: Env, corsHeaders: Record<string, string>): Promise<Response> {

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }

    try {
      // Parse request body
      const formData: ContactFormData = await request.json();

      // Verify Turnstile token if secret key is configured
      // Skip verification if using test token (CAPTCHA disabled for development)
      const isTestToken = formData.turnstileToken === "test-token-captcha-disabled";
      
      if (env.TURNSTILE_SECRET_KEY && formData.turnstileToken && !isTestToken) {
        // Verify the Turnstile token with Cloudflare
        const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            secret: env.TURNSTILE_SECRET_KEY,
            response: formData.turnstileToken,
            remoteip: request.headers.get('CF-Connecting-IP') || undefined,
          }),
        });

        const turnstileData = await turnstileResponse.json();

        if (!turnstileData.success) {
          return new Response(
            JSON.stringify({ error: 'CAPTCHA verification failed. Please try again.' }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                ...corsHeaders,
              },
            }
          );
        }
      }

      // Validate required fields
      if (!formData.name || !formData.email || !formData.organisation || !formData.phone || !formData.subject || !formData.message) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders,
            },
          }
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return new Response(
          JSON.stringify({ error: 'Invalid email format' }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders,
            },
          }
        );
      }

      // Get recipient emails from environment variable
      if (!env.RECIPIENT_EMAILS) {
        return new Response(
          JSON.stringify({ error: 'RECIPIENT_EMAILS environment variable is not set' }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders,
            },
          }
        );
      }

      if (!env.RESEND_API_KEY) {
        return new Response(
          JSON.stringify({ error: 'RESEND_API_KEY environment variable is not set' }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders,
            },
          }
        );
      }

      const recipientEmails = env.RECIPIENT_EMAILS.split(',').map(email => email.trim());
      const fromEmail = env.FROM_EMAIL || 'onboarding@resend.dev';

      // Check if this is a job application
      const isJobApplication = formData.type === 'job_application';

      // Prepare email content
      const emailSubject = isJobApplication 
        ? `New Profile: ${formData.jobTitle || formData.subject}`
        : `New Enquiry: ${formData.subject}`;
      
      const emailHtml = isJobApplication ? getJobApplicationEmailHtml(formData) : getContactFormEmailHtml(formData);

      const emailText = isJobApplication 
        ? getJobApplicationEmailText(formData)
        : getContactFormEmailText(formData);

      // Prepare email payload
      interface EmailPayload {
        from: string;
        to: string[];
        subject: string;
        html: string;
        text: string;
        reply_to: string;
        attachments?: Array<{ filename: string; content: string }>;
      }
      
      const emailPayload: EmailPayload = {
        from: fromEmail,
        to: recipientEmails,
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
        reply_to: formData.email,
      };

      // Add resume attachment if this is a job application
      if (isJobApplication && formData.resume) {
        emailPayload.attachments = [
          {
            filename: formData.resume.filename,
            content: formData.resume.content, // base64 encoded content
          },
        ];
      }

      // Send email via Resend API
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json().catch(() => ({}));
        console.error('Resend API error:', errorData);
        return new Response(
          JSON.stringify({ 
            error: 'Failed to send email',
            details: errorData 
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      }

      const resendData = await resendResponse.json();

      // Return success response
      return new Response(
        JSON.stringify({ 
          success: true,
          message: 'Email sent successfully',
          id: resendData.id 
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Internal server error',
          message: error instanceof Error ? error.message : 'Unknown error'
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Get contact form email HTML
function getContactFormEmailHtml(formData: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; }
          .value { color: #4b5563; }
          .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 5px 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Enquiry</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${escapeHtml(formData.name)}</div>
            </div>
            <div class="field">
              <div class="label">Organisation:</div>
              <div class="value">${escapeHtml(formData.organisation)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${escapeHtml(formData.email)}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${escapeHtml(formData.phone)}</div>
            </div>
            <div class="field">
              <div class="label">Subject / Area of Interest:</div>
              <div class="value">${escapeHtml(formData.subject)}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${escapeHtml(formData.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Anagha Softech contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Get job application email HTML
function getJobApplicationEmailHtml(formData: ContactFormData): string {
  const lines = formData.message.split('\n');
  const details: Record<string, string> = {};
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      details[key] = value;
    }
  });

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; }
          .value { color: #4b5563; }
          .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 5px 5px; }
          .resume-note { background-color: #dbeafe; padding: 10px; border-radius: 5px; margin-top: 15px; color: #1e40af; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Profile</h2>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Position: ${escapeHtml(formData.jobTitle || 'N/A')}</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Full Name:</div>
              <div class="value">${escapeHtml(formData.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${escapeHtml(formData.email)}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${escapeHtml(formData.phone)}</div>
            </div>
            <div class="field">
              <div class="label">Current Job Title:</div>
              <div class="value">${escapeHtml(formData.organisation)}</div>
            </div>
            ${Object.entries(details).map(([key, value]) => `
              <div class="field">
                <div class="label">${escapeHtml(key)}:</div>
                <div class="value">${escapeHtml(value)}</div>
              </div>
            `).join('')}
            ${formData.resume ? `
              <div class="resume-note">
                <strong>📎 Resume Attached:</strong> ${escapeHtml(formData.resume.filename)}<br>
                <small>The resume file is attached to this email.</small>
              </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This email was sent from the Anagha Softech job application form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Get contact form email text
function getContactFormEmailText(formData: ContactFormData): string {
  return `
New Enquiry

Name: ${formData.name}
Organisation: ${formData.organisation}
Email: ${formData.email}
Phone: ${formData.phone}
Subject / Area of Interest: ${formData.subject}

Message:
${formData.message}

---
This email was sent from the Anagha Softech contact form.
  `;
}

// Get job application email text
function getJobApplicationEmailText(formData: ContactFormData): string {
  return `
New Profile

Position: ${formData.jobTitle || 'N/A'}

Full Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Current Job Title: ${formData.organisation}

Application Details:
${formData.message}

${formData.resume ? `\nResume: ${formData.resume.filename} (attached)` : ''}

---
This email was sent from the Anagha Softech job application form.
  `;
}

