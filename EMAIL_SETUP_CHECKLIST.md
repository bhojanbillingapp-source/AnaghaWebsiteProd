# Email Setup Checklist

Use this checklist to ensure emails are properly configured and working.

## Prerequisites ✓

- [ ] Node.js 18+ installed
- [ ] npm/yarn package manager
- [ ] Cloudflare account (free tier OK)
- [ ] Git for version control

## Step 1: Create Resend Account ✓

- [ ] Go to https://resend.com and create account
- [ ] Verify email address
- [ ] Go to Settings → API Keys
- [ ] Click "Create API Key"
- [ ] Save the key (looks like `re_xxxxxxxxxxxxxx`)
- [ ] Go to Settings → Domains (optional but recommended)
- [ ] Add your sending domain OR use `onboarding@resend.dev` for testing

## Step 2: Set Up Cloudflare Worker

### 2a: Install Wrangler CLI
- [ ] Run: `npm install -g wrangler`
- [ ] Verify: `wrangler --version`
- [ ] Login: `wrangler login` (opens browser for Cloudflare auth)

### 2b: Configure Secrets
Run each of these commands and paste the values when prompted:

- [ ] `wrangler secret put RESEND_API_KEY`
  - Paste the API key from Resend (e.g., `re_xxxxx`)
  - Press Enter

- [ ] `wrangler secret put RECIPIENT_EMAILS`
  - Paste recipient email(s) - comma-separated for multiple
  - Example: `contact@anaghasoft.ai,hr@anaghasoft.ai`
  - Press Enter

- [ ] `wrangler secret put TURNSTILE_SECRET_KEY` (OPTIONAL)
  - Get from Cloudflare dashboard → Turnstile → Create Site
  - This enables CAPTCHA on forms

- [ ] `wrangler secret put ADMIN_USERNAME` (OPTIONAL)
  - For admin panel: suggest `admin`

- [ ] `wrangler secret put ADMIN_PASSWORD` (OPTIONAL)
  - For admin panel: use a strong password

### 2c: Verify Configuration
- [ ] Run: `wrangler secret list`
- [ ] All expected secrets should appear (values hidden)

**Example output:**
```
✓ Current Env: production
┌──────────────────────┬──────────────┐
│ name                 │ type         │
├──────────────────────┼──────────────┤
│ RESEND_API_KEY       │ secret_text  │
│ RECIPIENT_EMAILS     │ secret_text  │
│ TURNSTILE_SECRET_KEY │ secret_text  │
└──────────────────────┴──────────────┘
```

## Step 3: Configure Sender Email

- [ ] Open `wrangler.jsonc`
- [ ] Verify `FROM_EMAIL` is set correctly
  - Should be a domain you own OR `onboarding@resend.dev` for testing
  - Example: `Contact@anaghasoft.ai`
- [ ] For custom domains, verify it in Resend dashboard

## Step 4: Local Testing (OPTIONAL but recommended)

### 4a: Set Up Local Environment
- [ ] Copy example vars: `cp .dev.vars.example .dev.vars`
- [ ] Edit `.dev.vars` with test values:
  ```
  RESEND_API_KEY=re_your_test_key
  RECIPIENT_EMAILS=your-email@example.com
  FROM_EMAIL=Contact@anaghasoft.ai
  ```
- [ ] Verify `.dev.vars` is in `.gitignore` ✓

### 4b: Test Worker Locally
- [ ] Run: `npm run worker:dev`
- [ ] Open browser to: `http://localhost:8787`
- [ ] In another terminal, test submission:
  ```bash
  curl -X POST http://localhost:8787/api/contact \
    -H "Content-Type: application/json" \
    -d '{
      "name":"Test User",
      "email":"test@example.com",
      "organisation":"Test Org",
      "phone":"+1234567890",
      "subject":"Test Email",
      "message":"This is a test message"
    }'
  ```
- [ ] Expected: Success response with email ID
- [ ] Check your email to confirm delivery
- [ ] Check worker logs: `npm run worker:tail`

## Step 5: Deploy to Production

### 5a: Deploy Worker
- [ ] Run: `npm run deploy:worker`
- [ ] Wait for deployment to complete
- [ ] Get worker URL from Cloudflare dashboard (should be `https://anagha-contact.jasti.workers.dev`)

### 5b: Build Frontend
- [ ] Run: `npm run build`
- [ ] Check `dist/` folder was created
- [ ] Verify no build errors

### 5c: Deploy Everything
- [ ] Run: `npm run deploy`
- [ ] Wait for build and deployment to complete
- [ ] Check deployment status in Cloudflare dashboard

## Step 6: Verify Production Deployment

### 6a: Test Email Submission
- [ ] Visit your website: `https://yourdomain.com/contact`
- [ ] Fill out contact form
- [ ] Click "Let's Connect"
- [ ] Should see success message
- [ ] Check email inbox for reception

### 6b: Monitor Worker
- [ ] Run: `npm run worker:tail`
- [ ] Submit a test form
- [ ] Watch logs in real-time for any errors

### 6c: Check Worker Logs via Dashboard
- [ ] Go to Cloudflare dashboard
- [ ] Workers → anagha-contact
- [ ] Click "Logs" tab
- [ ] Should see successful requests (`status: 200`)

## Step 7: Troubleshooting Checklist

If emails aren't being sent:

- [ ] **Worker Status**: Check `npm run worker:tail` for errors
- [ ] **API Key**: Verify `wrangler secret list` shows `RESEND_API_KEY`
- [ ] **Recipients Email**: Confirm `RECIPIENT_EMAILS` is set and valid
- [ ] **Sender Email**: Check `FROM_EMAIL` in wrangler.jsonc is verified in Resend
- [ ] **CORS**: Forms use POST with JSON content type
- [ ] **CAPTCHA**: If enabled, ensure Turnstile is properly configured
- [ ] **Rate Limiting**: Check if hitting Resend API limits
- [ ] **Network**: Verify worker can reach https://api.resend.com

### Debug Steps
1. Run worker locally: `npm run worker:dev`
2. Submit test form to http://localhost:8787/api/contact
3. Check console output for detailed error messages
4. Try with Turnstile disabled temporarily to isolate issue
5. Test Resend API directly with curl using your API key

## Step 8: Submit Test Forms

- [ ] Contact Form
  - [ ] Fill all required fields
  - [ ] Submit
  - [ ] Confirm success message
  - [ ] Confirm email received

- [ ] Job Application Form
  - [ ] Fill all required fields
  - [ ] Upload resume
  - [ ] Submit
  - [ ] Confirm success message
  - [ ] Confirm email with attachment received

## Final Verification

- [ ] Emails arrive within 15 seconds of submission
- [ ] Emails contain correct form data
- [ ] Job applications include resume attachment
- [ ] No errors in worker logs
- [ ] Admin panel login works
- [ ] CAPTCHA prevents invalid submissions

## Post-Deployment

- [ ] Set up email forwarding (optional)
- [ ] Configure email filtering rules
- [ ] Test from different devices/browsers
- [ ] Monitor Resend analytics
- [ ] Set up uptime monitoring for worker
- [ ] Document any custom configurations

## Documentation Links

- Setup Guide: [WORKER_SETUP.md](WORKER_SETUP.md)
- Deployment Guide: [DEPLOYMENT.md](DEPLOYMENT.md)
- Resend Docs: https://resend.com/docs
- Cloudflare Workers: https://developers.cloudflare.com/workers/
- Turnstile: https://developers.cloudflare.com/turnstile/

## Quick Reference Commands

```bash
# Setup
npm install
wrangler login
wrangler secret put RESEND_API_KEY
wrangler secret put RECIPIENT_EMAILS

# Development
npm run dev                    # Frontend
npm run worker:dev           # Worker
npm run worker:tail          # Logs

# Deploy
npm run build
npm run deploy:worker
npm run deploy

# Debug
wrangler secret list
npm run worker:tail
curl -X POST http://localhost:8787/api/contact -H "Content-Type: application/json" -d '{...}'
```

---

**Status**: ⏳ Setup in Progress | ✅ Complete | ❌ Failed

Mark progress as you complete each section above.
