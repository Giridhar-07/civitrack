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