# Email Service Setup Guide for CiviTrack

## Overview

CiviTrack now includes email verification and password reset functionality. This guide explains how to set up and configure the email service for your deployment.

## Required Environment Variables

Add the following environment variables to your backend `.env` file:

```
# Email Configuration
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_FROM=CiviTrack <noreply@civitrack.com>
FRONTEND_URL=https://your-frontend-url.com
```

## Email Service Provider Options

### Option 1: Gmail SMTP

1. Create or use an existing Gmail account
2. Enable 2-Step Verification for your Google account
3. Generate an App Password:
   - **Ensure 2-Step Verification is enabled for your Google account.** This is a prerequisite for the "App passwords" option to appear.
   - Go to your Google Account Security settings: [https://myaccount.google.com/security](https://myaccount.google.com/security)
   - Under "How you sign in to Google", find and click on "App passwords". (If you don't see this option, please ensure 2-Step Verification is enabled first).
   - In the "Select app" dropdown, choose "Mail".
   - In the "Select device" dropdown, choose "Other (Custom name)" and enter "CiviTrack" (or any descriptive name you prefer).
   - Click the "Generate" button.
   - A 16-character app password will be displayed. Copy this password, as you will need it for the `EMAIL_PASS` environment variable.
4. Use the following settings:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   ```

    EMAIL_PASS=your-app-password
    ```

    **Note on Gmail Sending Limits:** Gmail accounts are primarily designed for personal use and have daily sending limits (e.g., 500 emails per day). For applications requiring higher email volumes or more robust delivery features, it is highly recommended to use a dedicated email service provider like SendGrid or Mailgun (Options 2 and 3 below). These services offer better deliverability, analytics, and higher sending limits suitable for production environments.

### Option 2: Brevo (Free Plan) — Recommended

Brevo (formerly Sendinblue) offers a generous free tier suitable for production-like usage.

1. Create a Brevo account at https://www.brevo.com and verify your email.
2. Navigate to SMTP & API and generate an SMTP key.
3. Use the following settings:
   ```
   EMAIL_HOST=smtp-relay.brevo.com
   EMAIL_PORT=587
   EMAIL_USER=<your-brevo-username-or-account-email>
   EMAIL_PASS=<your-brevo-smtp-key>
   EMAIL_FROM=CiviTrack <noreply@civitrack.com>
   ```
   - If your account email is used for SMTP auth, set `EMAIL_USER` to that email. For accounts that provide a specific SMTP username, use that instead.
   - If you experience STARTTLS negotiation timeouts on certain hosts, try SMTPS on port `465` by setting `EMAIL_PORT=465`.
4. (Optional but recommended) Set `EMAIL_FROM` to match a domain you control and configure SPF/DKIM in Brevo for better deliverability.

### Option 3: Mailjet (Free Plan)

Mailjet’s free plan supports SMTP with reasonable limits.

1. Create a Mailjet account at https://www.mailjet.com and verify your sender domain.
2. Generate SMTP credentials and note your API key and secret.
3. Use the following settings:
   ```
   EMAIL_HOST=in-v3.mailjet.com
   EMAIL_PORT=587
   EMAIL_USER=<your-mailjet-api-key>
   EMAIL_PASS=<your-mailjet-secret-key>
   EMAIL_FROM=CiviTrack <noreply@civitrack.com>
   ```
   - Switch to `EMAIL_PORT=465` if you see STARTTLS timeout issues.

### Option 2: SendGrid

1. Create a SendGrid account at [sendgrid.com](https://sendgrid.com)
2. Create an API Key with "Mail Send" permissions
3. Use the following settings:
   ```
   EMAIL_HOST=smtp.sendgrid.net
   EMAIL_PORT=587
   EMAIL_USER=apikey
   EMAIL_PASS=your-sendgrid-api-key
   ```

### Option 3: Mailgun

1. Create a Mailgun account at [mailgun.com](https://mailgun.com)
2. Verify your domain or use the sandbox domain
3. Use the following settings:
   ```
   EMAIL_HOST=smtp.mailgun.org
   EMAIL_PORT=587
   EMAIL_USER=postmaster@your-domain.mailgun.org
   EMAIL_PASS=your-mailgun-password
   ```

## Testing Email Configuration

After setting up your email service, you can test it by:

1. Starting your backend server in development mode
2. Checking the console logs for "Email server is ready to send messages"
3. Registering a new user and verifying that the verification email is sent

## Troubleshooting

### Common Issues

1. **Connection Refused**: Check if your email provider blocks connections from your server IP
2. **Authentication Failed**: Verify your username and password are correct
3. **Rate Limiting**: Some providers limit the number of emails you can send

### Debugging

If you're having issues, you can add more detailed logging by modifying the `email.ts` file:

```typescript
transporter.verify((error: Error | null) => {
  if (error) {
    console.error('Email configuration error details:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});
```

## Production Considerations

1. Use environment variables for all sensitive information
2. Consider using a dedicated email service like SendGrid or Mailgun for production
3. Set up proper SPF and DKIM records for your domain to improve deliverability
4. Monitor email sending rates and deliverability

## Support

If you encounter any issues with the email service, please open an issue on the CiviTrack GitHub repository with details about your configuration and the error messages you're seeing.
---

## Render Environment Variable Updates (Backend)

To update the backend service on Render with the new email provider:

1. Edit `backend/.env` with your new SMTP settings. Example for Brevo:
   ```
   EMAIL_HOST=smtp-relay.brevo.com
   EMAIL_PORT=587
   EMAIL_USER=you@example.com
   EMAIL_PASS=your-brevo-smtp-key
   EMAIL_FROM=CiviTrack <noreply@civitrack.com>
   FRONTEND_URL=https://civitrack-dev.netlify.app
   ```
2. Ensure Render credentials are set:
   ```
   RENDER_SERVICE_ID=<your-render-service-id>
   RENDER_API_KEY=<your-render-api-key>
   ```
3. Sync env vars and redeploy using the provided script:
   ```
   node deploy-backend.js
   ```
   - The script will push env changes to the Render service and trigger a deployment.
4. Verify health:
   - `GET https://civitrack.onrender.com/api/status?verbose=true`
   - Ensure `services.email.ok: true` and `smtpReachable: true`.

If your region exhibits STARTTLS timeouts (`ETIMEDOUT` at ~10s per attempt), switch to SMTPS:
``` 
EMAIL_PORT=465 
```

---

## AI Component (Free Model Configuration)

The backend uses the official Google Generative AI SDK. To stay within the free tier and avoid endpoint mismatches:

1. Set a free-tier model in `backend/.env`:
   ```
   GEMINI_MODEL=gemini-1.5-flash-latest
   GEMINI_API_KEY=<your-gemini-api-key>
   ```
   - Alternatives: `gemini-1.5-flash-8b` or `gemini-1.5-flash`.
2. Redeploy with `node deploy-backend.js`.
3. Verify AI health quickly:
   - `GET https://civitrack.onrender.com/api/status?verbose=true`
   - `services.ai.ok` should be `true` or the short health timeout may show degraded. Functional endpoints (chat) should still work.

Note: The service code is restricted to free models; if an unsupported `GEMINI_MODEL` is set, it falls back to `gemini-1.5-flash`.

---

## MCP-Assisted Verification (Optional)

You can use the MCP utilities in this workspace to quickly verify deployment health:

- Fetch unified status:
  - `GET https://civitrack.onrender.com/api/status?verbose=true`
- Re-run after any env change and redeploy to confirm `email.ok` and `ai.ok`.

These checks help ensure your SMTP provider and chosen AI model are correctly configured and reachable from Render.