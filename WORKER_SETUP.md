# Cloudflare Worker Email Setup Guide

This guide explains how to configure the Cloudflare Worker to send emails via the Resend API.

## Prerequisites

1. **Cloudflare Account**: Active Cloudflare account with Workers enabled
2. **Resend Account**: Create a free account at [resend.com](https://resend.com)
3. **Wrangler CLI**: Install with `npm install -g wrangler`

## Step 1: Set Up Resend API

1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Create a new API key (keep it secret!)
3. Verify your sender email domain in Resend

## Step 2: Configure Environment Variables

You need to set these **secrets** in your Cloudflare Worker:

```bash
# Set the Resend API Key (required for sending emails)
wrangler secret put RESEND_API_KEY

# Set recipient email addresses (comma-separated)
wrangler secret put RECIPIENT_EMAILS

# Set Turnstile secret for CAPTCHA (optional but recommended)
wrangler secret put TURNSTILE_SECRET_KEY

# Set admin credentials (optional, for admin panel)
wrangler secret put ADMIN_USERNAME
wrangler secret put ADMIN_PASSWORD
```

### Example Values

```
RESEND_API_KEY: re_xxxxxxxxxxxxxxxxx (from Resend dashboard)
RECIPIENT_EMAILS: contact@anaghasoft.ai, info@anaghasoft.ai
TURNSTILE_SECRET_KEY: (from Cloudflare dashboard)
ADMIN_USERNAME: admin
ADMIN_PASSWORD: (strong password)
```

## Step 3: Deploy the Worker

```bash
# Deploy to Cloudflare
wrangler deploy

# Test the deployment
curl -X POST https://anagha-contact.jasti.workers.dev/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "your-email@example.com",
    "organisation": "Test Org",
    "phone": "+1234567890",
    "subject": "Test Enquiry",
    "message": "This is a test message"
  }'
```

## Environment Variables Reference

| Variable | Required | Type | Description |
|----------|----------|------|-------------|
| `RESEND_API_KEY` | Yes | String | API key from Resend dashboard |
| `RECIPIENT_EMAILS` | Yes | String | Comma-separated list of email addresses to receive submissions |
| `FROM_EMAIL` | Yes | String | Sender email address (must be verified in Resend) |
| `TURNSTILE_SECRET_KEY` | No | String | Cloudflare Turnstile secret for CAPTCHA verification |
| `ADMIN_USERNAME` | No | String | Username for admin panel access |
| `ADMIN_PASSWORD` | No | String | Password for admin panel access |

## API Endpoints

### Contact Form Submission
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "organisation": "Acme Corp",
  "phone": "+1234567890",
  "subject": "Inquiry",
  "message": "I'd like to know more...",
  "turnstileToken": "token_from_captcha" (optional)
}
```

### Job Application Submission
```
POST /api/contact
Content-Type: application/json

{
  "type": "job_application",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "organisation": "Current Company",
  "subject": "Job Application: Senior Developer",
  "jobTitle": "Senior Developer",
  "jobId": "job-001",
  "message": "Job Application Details:\n...",
  "resume": {
    "filename": "resume.pdf",
    "content": "base64_encoded_content",
    "type": "application/pdf"
  },
  "turnstileToken": "token_from_captcha"
}
```

## Troubleshooting

### Emails not being sent?

1. **Check Resend API Key**: Ensure `RESEND_API_KEY` is set correctly
   ```bash
   wrangler secret list
   ```

2. **Verify Sender Email**: Make sure `FROM_EMAIL` is verified in Resend dashboard

3. **Check Recipient Email**: Ensure `RECIPIENT_EMAILS` is set and valid

4. **View Worker Logs**:
   ```bash
   wrangler tail
   ```

5. **Check Response**: Verify the API returns `success: true`

### CAPTCHA Verification Failing?

- Ensure `TURNSTILE_SECRET_KEY` is configured in Cloudflare Secrets
- Check the Turnstile site key in the frontend code matches your Cloudflare domain

### Admin Login Issues?

- Verify `ADMIN_USERNAME` and `ADMIN_PASSWORD` are correctly set
- Token expires after 24 hours - user must log in again

## Resend API Status Codes

| Code | Meaning | Solution |
|------|---------|----------|
| 200 | Success | Email sent |
| 400 | Bad Request | Check required fields are provided |
| 401 | Unauthorized | Verify RESEND_API_KEY is correct |
| 422 | Invalid Address | Check email format and FROM_EMAIL is verified |
| 429 | Rate Limited | Wait before retrying |
| 500 | Server Error | Check Resend status page |

## Development

To test locally:

```bash
# Install dependencies
npm install

# Create .dev.vars file with test credentials
cat > .dev.vars << EOF
RESEND_API_KEY=test_key_here
RECIPIENT_EMAILS=test@example.com
TURNSTILE_SECRET_KEY=test_secret
ADMIN_USERNAME=admin
ADMIN_PASSWORD=password
EOF

# Run locally
wrangler dev

# Test with curl
curl -X POST http://localhost:8787/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","organisation":"Test","phone":"123","subject":"Test","message":"Test"}'
```

## Security Notes

- Always use `wrangler secret put` for sensitive credentials (never commit to git)
- Regenerate Resend API keys if compromised
- Update admin password regularly
- Enable Turnstile CAPTCHA to prevent spam
- Rate limit submissions if needed

## Support

For issues:
- [Resend Documentation](https://resend.com/docs)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/)
