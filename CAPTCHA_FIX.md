# CAPTCHA Error Fix

## The Problem
You're getting "CAPTCHA verification failed" because Turnstile CAPTCHA is not configured.

## Quick Solutions

### Option 1: Use Testing/Bypass Mode (Fastest)

If you just want to test the form without CAPTCHA:

**1. Set test environment variable:**
Create or edit `.env.local`:
```
VITE_TURNSTILE_SITE_KEY=1x00000000000000000000AA
```

**2. Restart dev server:**
```bash
# Stop current server (Ctrl+C)
# Then restart:
npm run dev
```

**3. Test the form:**
- Go to http://localhost:8080/careers
- Click "Apply Now" on any job
- The CAPTCHA will be in test mode (just click it)
- Submit the form

This will bypass actual verification for local testing.

---

### Option 2: Configure Real Turnstile (Recommended for Production)

**Step 1: Create Turnstile Site**
1. Go to https://dash.cloudflare.com
2. Select your domain (or create one)
3. Go to **Turnstile** in the left menu
4. Click **Create Site**
5. Fill in:
   - **Site name**: "Anagha Softech" 
   - **Domain**: Your domain (e.g., `localhost` for testing)
   - **Mode**: Choose "Managed" (simpler UX) or "Non-Interactive" (invisible)
6. Click **Create**

**Step 2: Get Your Keys**
- Copy the **Site Key** (starts with `0x...`)
- Copy the **Secret Key** (also starts with `0x...`)

**Step 3: Configure Frontend**
Create/edit `.env.local`:
```
VITE_TURNSTILE_SITE_KEY=0xyour_site_key_here
```

**Step 4: Configure Cloudflare Worker**
```bash
wrangler secret put TURNSTILE_SECRET_KEY
# Paste your secret key from step 2
```

**Step 5: Redeploy**
```bash
npm run deploy:worker
```

---

## Verification

### Check if CAPTCHA is Working

1. **In browser console** (F12 → Console):
   ```javascript
   // Should show your current site key (or test key)
   document.body.innerHTML.match(/1x00000000000000000000AA|0x[a-f0-9]+/)?.[0]
   ```

2. **Check for Turnstile widget**:
   - Open DevTools (F12)
   - Look for `<iframe>` with `challenges.cloudflare.com`
   - If present, CAPTCHA is loaded

3. **Test submission**:
   - Complete the CAPTCHA
   - Check browser console for any errors
   - Check worker logs: `npm run worker:tail`

---

## Troubleshooting

### "CAPTCHA verification failed" still appears?

**Issue 1: Environment variable not loaded**
```bash
# Stop and restart dev server
npm run dev
# Check .env.local file exists and has VITE_TURNSTILE_SITE_KEY
```

**Issue 2: Worker secret not set**
```bash
# Verify secret is set
wrangler secret list

# If missing, set it
wrangler secret put TURNSTILE_SECRET_KEY
# Paste your Turnstile secret key

# Redeploy worker
npm run deploy:worker
```

**Issue 3: Domain mismatch**
- The domain in Turnstile settings must match your current domain
  - Local testing: Use `localhost`
  - Production: Use your actual domain
- You can add multiple domains to one site in Turnstile

**Issue 4: Turnstile script not loading**
1. Open DevTools (F12)
2. Check **Network** tab for requests to `challenges.cloudflare.com`
3. If 404 or blocked, CORS might be the issue
4. Try clearing browser cache and cookies

---

## Testing Without CAPTCHA (For Development)

If Turnstile is causing issues, you can temporarily disable it:

**File**: `src/components/JobApplicationForm.tsx`

Around line 186, change:
```typescript
// FROM:
if (TURNSTILE_SITE_KEY && !turnstileToken) {
  setTurnstileError("Please complete the CAPTCHA verification.");
  setIsSubmitting(false);
  return;
}

// TO (for testing only):
if (false && !turnstileToken) {  // Disable CAPTCHA check
  setTurnstileError("Please complete the CAPTCHA verification.");
  setIsSubmitting(false);
  return;
}
```

Then create a dummy token before submitting:
```typescript
// Around line 228, add before fetch:
const testToken = TURNSTILE_SITE_KEY ? turnstileToken : "test-token-disabled";
```

**⚠️ WARNING**: Only do this for local testing. Never push to production with CAPTCHA disabled.

---

## Environment Variables Needed

| Variable | Where | Value | Required |
|----------|-------|-------|----------|
| `VITE_TURNSTILE_SITE_KEY` | `.env.local` | `1x00000000...` (test) or `0x...` (real) | No (optional for testing) |
| `TURNSTILE_SECRET_KEY` | Cloudflare Secrets | `0x...` | Yes (if using CAPTCHA) |

---

## For Email to Work Too

Remember, you also need:
- `RESEND_API_KEY` in Cloudflare Secrets
- `RECIPIENT_EMAILS` in Cloudflare Secrets
- `FROM_EMAIL` in `wrangler.jsonc`

See [SETUP_SUMMARY.md](SETUP_SUMMARY.md) for complete setup.

---

## Quick Fix Button

I've created `.env.local` with test Turnstile key. **Restart your dev server now**:

```bash
# Stop: Ctrl+C in the terminal
# Restart:
npm run dev
```

Then try submitting the form again. It should work with test CAPTCHA.

If you want real CAPTCHA, follow **Option 2** above.
