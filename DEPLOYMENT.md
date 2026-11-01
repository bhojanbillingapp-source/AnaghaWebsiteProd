# Email Sending Setup & Deployment Guide

This guide explains how to set up and deploy the Anagha Softech website with functioning email capabilities.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Local Development](#local-development)
3. [Production Deployment](#production-deployment)
4. [Troubleshooting](#troubleshooting)
5. [Architecture Overview](#architecture-overview)

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Cloudflare account
- Resend account (for email sending)

### Setup Steps

```bash
# 1. Install dependencies
npm install

# 2. Configure Cloudflare Worker secrets (see WORKER_SETUP.md)
# You need to set these via Cloudflare dashboard:
#   - RESEND_API_KEY (from resend.com)
#   - RECIPIENT_EMAILS
#   - TURNSTILE_SECRET_KEY (optional but recommended)

# 3. Deploy the worker
npm run deploy:worker

# 4. Build and deploy the website
npm run deploy
```

## Local Development

### Frontend

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in browser
```

### Worker

```bash
# Create .dev.vars file
cp .dev.vars.example .dev.vars

# Edit .dev.vars with your test credentials:
# - RESEND_API_KEY: Use a test key or sandbox mode
# - RECIPIENT_EMAILS: Your email
# - Other optional variables

# Run worker locally
npm run worker:dev

# In another terminal, you can test the endpoint:
curl -X POST http://localhost:8787/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "organisation":"Test Org",
    "phone":"+1234567890",
    "subject":"Test",
    "message":"Testing email submission"
  }'

# View worker logs
npm run worker:tail
```

## Production Deployment

### Step 1: Set Up Resend for Email Sending

1. Create a free account at [resend.com](https://resend.com)
2. Go to Settings → API Keys and create a new key
3. Add your sender domain in Settings → Domains
4. Verify the domain or use the default `onboarding@resend.dev`

### Step 2: Configure Cloudflare Worker Secrets

Use Wrangler CLI to set secrets (makes them secure and not visible in code):

```bash
# Set Resend API Key
wrangler secret put RESEND_API_KEY
# Paste your key from step 1 above

# Set recipient email addresses (comma-separated)
wrangler secret put RECIPIENT_EMAILS
# Example: contact@anaghasoft.ai,hr@anaghasoft.ai

# Set Turnstile secret (optional, for CAPTCHA)
wrangler secret put TURNSTILE_SECRET_KEY
# Get from Cloudflare dashboard → Turnstile

# Set admin credentials (optional)
wrangler secret put ADMIN_USERNAME
# Example: admin

wrangler secret put ADMIN_PASSWORD
# Example: strong-password-here
```

### Step 3: Verify Configuration

```bash
# List all configured secrets (names only, not values)
wrangler secret list
```

Expected output:
```
√ Current Env: production
┌─────────────────────┬────────────────┐
│ name                │ type           │
├─────────────────────┼────────────────┤
│ RESEND_API_KEY      │ secret_text    │
│ RECIPIENT_EMAILS    │ secret_text    │
│ TURNSTILE_SECRET_KEY│ secret_text    │
│ ADMIN_USERNAME      │ secret_text    │
│ ADMIN_PASSWORD      │ secret_text    │
└─────────────────────┴────────────────┘
```

### Step 4: Deploy

```bash
# Deploy just the worker
npm run deploy:worker

# Or deploy everything (frontend + worker)
npm run deploy
```

### Step 5: Test the Deployment

```bash
# Test contact form submission
curl -X POST https://anagha-contact.jasti.workers.dev/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John Doe",
    "email":"john@example.com",
    "organisation":"Acme Corp",
    "phone":"+1234567890",
    "subject":"Inquiry",
    "message":"I would like to learn more about your services."
  }'

# Expected response:
# {"success":true,"message":"Email sent successfully","id":"..."}
```

## Troubleshooting

### Emails Not Sending?

**Issue: "RESEND_API_KEY environment variable is not set"**
- Solution: Run `wrangler secret put RESEND_API_KEY` and restart the worker

**Issue: "RECIPIENT_EMAILS environment variable is not set"**
- Solution: Run `wrangler secret put RECIPIENT_EMAILS` with comma-separated emails

**Issue: "Failed to send email" / Invalid error from Resend**
- Check that `FROM_EMAIL` in wrangler.jsonc matches a verified sender in Resend
- Verify Resend API key is correct and hasn't expired
- Check Resend status page: https://status.resend.com

**Issue: CAPTCHA verification failing**
- Ensure Turnstile secret matches your Cloudflare domain
- Check both Turnstile site key and secret are correct

### Test Locally First

Before assuming production is broken, test locally:

```bash
npm run worker:dev
# Then submit the form via http://localhost:5173/contact
# Check logs with: npm run worker:tail
```

### View Worker Logs

```bash
# Real-time logs from production worker
npm run worker:tail

# Or via Cloudflare dashboard:
# Workers → anagha-contact → Logs
```

### Database/Storage

Currently the system uses:
- **Email submissions**: Sent directly to configured recipients via Resend
- **Session storage**: Browser session storage (admin tokens)
- **Resend**: Stores email delivery logs (check dashboard)

To add persistent storage later, consider:
- Cloudflare KV (for caching)
- Cloudflare Durable Objects (for state)
- API integration with external database

## Architecture Overview

### System Flow

```
Frontend (React + TypeScript)
         ↓
Contact Form / Job Application
         ↓
Fetch to Cloudflare Worker (/api/contact)
         ↓
Worker validates & processes form
         ↓
Resend API → Email sent to recipients
         ↓
Response returned to frontend
```

### Key Components

1. **Frontend Forms**:
   - [src/pages/Contact.tsx](src/pages/Contact.tsx) - Contact form
   - [src/components/JobApplicationForm.tsx](src/components/JobApplicationForm.tsx) - Job application form

2. **Cloudflare Worker**:
   - [worker/index.ts](worker/index.ts) - Main worker handling all API endpoints
   - Endpoints:
     - `POST /api/contact` - Process contact and job applications
     - `POST /api/admin/login` - Admin authentication
     - `POST /api/admin/verify` - Token verification

3. **Email Service**:
   - Uses Resend API for reliable email delivery
   - Supports HTML and plain text emails
   - Attachment support for job applications (resumes)

## Environment Variables Reference

| Variable | Required | Where Set | Purpose |
|----------|----------|-----------|---------|
| `RESEND_API_KEY` | Yes | Wrangler secrets | Authenticates with Resend API |
| `RECIPIENT_EMAILS` | Yes | Wrangler secrets | Emails receive form submissions |
| `FROM_EMAIL` | Yes | wrangler.jsonc | Sender email address |
| `TURNSTILE_SECRET_KEY` | No | Wrangler secrets | CAPTCHA verification |
| `ADMIN_USERNAME` | No | Wrangler secrets | Admin panel auth |
| `ADMIN_PASSWORD` | No | Wrangler secrets | Admin panel auth |

## File Structure

```
├── src/
│   ├── pages/
│   │   ├── Contact.tsx        # Contact form page
│   │   ├── AdminLogin.tsx     # Admin login
│   │   └── AdminJobs.tsx      # Admin job listings
│   ├── components/
│   │   └── JobApplicationForm.tsx  # Job application modal
│   └── ...
├── worker/
│   └── index.ts               # Cloudflare Worker code
├── wrangler.jsonc             # Cloudflare Worker config
├── .dev.vars.example          # Example environment variables
├── package.json               # Project dependencies
└── WORKER_SETUP.md            # Detailed setup instructions
```

## Security Best Practices

1. **Never commit secrets** - Always use `wrangler secret put`, never in code
2. **Rotate API keys** - Regenerate Resend key if compromised
3. **Use strong passwords** - For admin panel credentials
4. **Enable CAPTCHA** - Prevents form spam
5. **Validate input** - Worker validates all form data with Zod schemas
6. **CORS enabled** - Allows requests from frontend, with CSRF protection via CAPTCHA

## Performance Notes

- Worker responses typically < 100ms
- Resend API delivery: 90%+ within 15 seconds
- Uses edge computing for low latency globally
- Automatic retry on transient failures

## Getting Help

- Check [WORKER_SETUP.md](WORKER_SETUP.md) for detailed worker setup
- Resend documentation: https://resend.com/docs
- Cloudflare Workers: https://developers.cloudflare.com/workers/
- Turnstile: https://developers.cloudflare.com/turnstile/

## Common Commands

```bash
# Development
npm run dev                    # Start dev server
npm run worker:dev           # Start worker locally
npm run worker:tail          # View worker logs

# Building
npm run build                # Build for production

# Deployment
npm run deploy               # Deploy everything
npm run deploy:worker        # Deploy just worker
wrangler secret put KEY      # Set a secret
wrangler secret list         # List all secrets
```
