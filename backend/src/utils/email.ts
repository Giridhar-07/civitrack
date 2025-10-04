import nodemailer, { Transporter } from 'nodemailer';
import * as https from 'https';
import { User } from '../models';
import crypto from 'crypto';
import { Op } from 'sequelize';

// Email configuration
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || '587', 10);
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_FROM = process.env.EMAIL_FROM || 'CiviTrack <noreply@civitrack.com>';
const APP_URL = process.env.FRONTEND_URL || 'https://civitrack-dev.netlify.app';
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const brevoApiKeyLooksValid = (key?: string) => !!(key && /^xkeysib-[A-Za-z0-9_\-]{10,}$/.test(key));

console.log('Email Config Status:');
console.log(`  EMAIL_HOST: ${EMAIL_HOST}`);
console.log(`  EMAIL_PORT: ${EMAIL_PORT}`);
console.log(`  EMAIL_USER: ${EMAIL_USER}`);
console.log(`  EMAIL_FROM: ${EMAIL_FROM}`);
console.log(`  APP_URL: ${APP_URL}`);
console.log(`  EMAIL_PASS: ${EMAIL_PASS ? '********' : 'NOT SET'}`); // Mask password for logs
console.log(`  BREVO_API_KEY set: ${BREVO_API_KEY ? 'true' : 'false'}`);
 
// Determine if email is properly configured
const isPlaceholderValue = (v?: string) => (
  !v || v === 'smtp.example.com' || v === 'user@example.com' || v === 'password' || v.trim() === ''
);
 
const EMAIL_CONFIGURED = (
  !isPlaceholderValue(EMAIL_HOST) &&
  !isPlaceholderValue(EMAIL_USER) &&
  !isPlaceholderValue(EMAIL_PASS)
);
console.log(`  EMAIL_CONFIGURED: ${EMAIL_CONFIGURED}`);

// Helper to parse sender name/email from EMAIL_FROM
const parseSender = (from: string): { email: string; name?: string } => {
  const match = from.match(/\s*([^<]*)\s*<([^>]+)>\s*/);
  if (match) {
    const name = match[1].trim();
    const email = match[2].trim();
    return { email, name: name || undefined };
  }
  return { email: from.trim() };
};

// Minimal Brevo API client using https; avoids adding new deps
const brevoRequest = (path: string, method: 'GET' | 'POST', body?: any, timeoutMs = 6000): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!BREVO_API_KEY) {
      return reject(new Error('BREVO_API_KEY_NOT_SET'));
    }
    if (!brevoApiKeyLooksValid(BREVO_API_KEY)) {
      const e = new Error('BREVO_API_KEY_INVALID_FORMAT');
      (e as any).status = 401;
      return reject(e);
    }
    const data = body ? Buffer.from(JSON.stringify(body)) : undefined;
    const options: https.RequestOptions = {
      hostname: 'api.brevo.com',
      path: `/v3/${path}`,
      method,
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        ...(data ? { 'content-type': 'application/json', 'content-length': String(data.length) } : {})
      }
    };
    const req = https.request(options, (res) => {
      const chunks: Buffer[] = [];
      res.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf8');
        const status = res.statusCode || 0;
        let json: any = null;
        try {
          json = raw ? JSON.parse(raw) : null;
        } catch (_) {
          // non-JSON body; wrap
          json = { raw };
        }
        if (status >= 200 && status < 300) {
          resolve(json);
        } else {
          const err = new Error(`BREVO_API_ERROR ${status}: ${raw}`);
          (err as any).status = status;
          reject(err);
        }
      });
    });
    req.on('error', (e) => reject(e));
    req.setTimeout(timeoutMs, () => {
      req.destroy(new Error('BREVO_API_TIMEOUT'));
    });
    if (data) req.write(data);
    req.end();
  });
};

// Create nodemailer transporter (log-only mode when not configured)
let transporter: Transporter;
if (EMAIL_CONFIGURED) {
  // Prefer secure SMTPS (465). For STARTTLS (587), require TLS and a modern minimum version.
  const useSecure = EMAIL_PORT === 465;
  const baseTransportOptions: any = {
    host: EMAIL_HOST!,
    port: EMAIL_PORT,
    secure: useSecure,
    auth: {
      user: EMAIL_USER!,
      pass: EMAIL_PASS!,
    },
    // Increased timeouts for better resilience on potentially slower networks/SMTP servers
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,   // 10 seconds
    socketTimeout: 15000,     // 15 seconds
    // Enable a small pool to reuse connections efficiently
    pool: true,
    maxConnections: 3,
    maxMessages: 10,
    // Enable verbose logging to diagnose SMTP handshake/timeouts in production
    logger: true,
    debug: true,
  };

  // Harden TLS only for STARTTLS (port 587). SMTPS on 465 is already encrypted at connection.
  if (!useSecure) {
    baseTransportOptions.requireTLS = true;
    baseTransportOptions.tls = {
      minVersion: 'TLSv1.2'
    };
  }

  transporter = nodemailer.createTransport(baseTransportOptions);

  console.log(useSecure 
    ? 'Email transport: using secure SMTPS (port 465)'
    : 'Email transport: using STARTTLS (port 587) with TLS >= 1.2');
} else {
  // Use jsonTransport to avoid network calls; emails will be logged only
  transporter = nodemailer.createTransport({ jsonTransport: true });
  console.warn('Email service is not fully configured. Running in log-only mode. Set EMAIL_HOST/USER/PASS to enable SMTP sending.');
  if (BREVO_API_KEY) {
    console.log('BREVO_API_KEY detected: Brevo HTTP API will be used for sending, SMTP is disabled.');
  }
}

// Optional fallback SMTP configuration
const FALLBACK_EMAIL_HOST = process.env.EMAIL_FALLBACK_HOST;
const FALLBACK_EMAIL_PORT = parseInt(process.env.EMAIL_FALLBACK_PORT || '587', 10);
const FALLBACK_EMAIL_SECURE = process.env.EMAIL_FALLBACK_SECURE === 'true';
const FALLBACK_EMAIL_USER = process.env.EMAIL_FALLBACK_USER;
const FALLBACK_EMAIL_PASS = process.env.EMAIL_FALLBACK_PASS;
const FALLBACK_CONFIGURED = Boolean(FALLBACK_EMAIL_HOST && FALLBACK_EMAIL_USER && FALLBACK_EMAIL_PASS);

let fallbackTransporter: Transporter | null = null;
if (FALLBACK_CONFIGURED) {
  try {
    fallbackTransporter = nodemailer.createTransport({
      host: FALLBACK_EMAIL_HOST!,
      port: FALLBACK_EMAIL_PORT,
      secure: FALLBACK_EMAIL_SECURE,
      auth: {
        user: FALLBACK_EMAIL_USER!,
        pass: FALLBACK_EMAIL_PASS!,
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 7000,
      pool: true,
      maxConnections: 2,
      maxMessages: 10,
    });
    // Verify silently; failures handled at send time
    fallbackTransporter.verify().then(() => {
      console.log('Fallback email server is ready to send messages');
    }).catch((err: any) => {
      console.warn('Fallback email server verification failed:', err?.message || String(err));
    });
  } catch (e) {
    console.warn('Failed to initialize fallback email transporter:', e);
    fallbackTransporter = null;
  }
}

// Verify email configuration in all environments, but do not crash
transporter.verify((error: Error | null) => {
  if (error) {
    if (EMAIL_CONFIGURED) {
      console.error('Email configuration error details:', error);
    } else {
      console.log('Email transport (log-only) is ready. No external SMTP connection will be made.');
    }
  } else {
    console.log(EMAIL_CONFIGURED ? 'Email server is ready to send messages' : 'Email transport (log-only) verified');
  }
});

// Generate a verification token for email verification
export const generateVerificationToken = async (user: User): Promise<string> => {
  const token = crypto.randomBytes(20).toString('hex');
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  
  user.emailVerificationToken = token;
  user.emailVerificationExpires = expires;
  await user.save();
  
  return token;
};

// Maximum number of retry attempts for email sending
const MAX_RETRY_ATTEMPTS = 7; // Increased retry attempts
// Base delay between retry attempts in milliseconds (exponential backoff with jitter)
const RETRY_BASE_MS = 3000; // Increased base retry delay
// Deduplication window to prevent duplicate sends (in ms)
const DEDUPE_WINDOW_MS = 2 * 60 * 1000; // 2 minutes

// In-flight/ recent send registry to prevent duplicates
const inFlightSends = new Map<string, number>();

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface EmailDeliveryMeta {
  attempted: boolean;
  channel: 'brevo_api' | 'smtp' | 'log-only';
  status: 'accepted' | 'failed' | 'deferred' | 'skipped';
  error?: string;
  messageId?: string;
}

// Send via Brevo HTTP API if available
const sendViaBrevo = async (mailOptions: any): Promise<any> => {
  const sender = parseSender(mailOptions.from || EMAIL_FROM);
  const to = Array.isArray(mailOptions.to) ? mailOptions.to : [mailOptions.to];
  const payload = {
    sender: sender,
    to: to.map((addr: string) => ({ email: String(addr).trim() })),
    subject: mailOptions.subject,
    htmlContent: mailOptions.html,
    // Optionally include textContent if provided
    ...(mailOptions.text ? { textContent: mailOptions.text } : {}),
  };
  console.log('Brevo API: sending email', { subject: payload.subject, to: payload.to });
  const res = await brevoRequest('smtp/email', 'POST', payload, 10000);
  // Brevo returns messageId in header/body; pass through
  return { messageId: res?.messageId || res?.message || 'brevo-api' };
};

// Try a single quick attempt to send via Brevo, return meta quickly.
const attemptImmediateEmailSend = async (mailOptions: any): Promise<EmailDeliveryMeta> => {
  // Prefer Brevo HTTP API for immediate confirmation if key looks valid
  if (BREVO_API_KEY && brevoApiKeyLooksValid(BREVO_API_KEY)) {
    try {
      const info = await sendViaBrevo(mailOptions);
      return { attempted: true, channel: 'brevo_api', status: 'accepted', messageId: info?.messageId };
    } catch (err: any) {
      const status = err?.status || 0;
      const msg = err?.message || String(err);
      const transient = status >= 500 || /TIMEOUT|ECONNRESET|EHOSTUNREACH|ENETUNREACH|timeout/i.test(msg);
      if (transient) {
        // schedule background retries with fallback
        void sendEmailWithRetry(mailOptions).catch(e => console.error('Background email retry failed:', e));
        return { attempted: true, channel: 'brevo_api', status: 'deferred', error: msg };
      }
      // Non-transient (e.g., unauthorized) — report failed and do not block
      return { attempted: true, channel: 'brevo_api', status: 'failed', error: msg };
    }
  }
  // Without valid Brevo API key, avoid blocking on SMTP handshake; schedule background attempt if configured
  if (EMAIL_CONFIGURED) {
    void sendEmailWithRetry(mailOptions).catch(e => console.error('Background SMTP send failed:', e));
    return { attempted: true, channel: 'smtp', status: 'deferred' };
  }
  // Log-only mode: no actual send
  console.log('Email generated (log-only):', mailOptions);
  return { attempted: false, channel: 'log-only', status: 'skipped' };
};

/**
 * Send an email with retry mechanism and timeout handling
 * @param mailOptions Email options
 * @param retryCount Current retry count
 * @returns Promise resolving to nodemailer info object
 */
const sendEmailWithRetry = async (mailOptions: any, retryCount = 0, internalRetry = false): Promise<any> => {
  const key = `${mailOptions.to}|${mailOptions.subject}`;
  const now = Date.now();

  // Dedupe: if a send started recently for the same key, skip
  const lastStart = inFlightSends.get(key);
  if (!internalRetry && lastStart && (now - lastStart) < DEDUPE_WINDOW_MS) {
    console.warn(`Skipping duplicate email send within window for ${key}`);
    return { skipped: true };
  }
  inFlightSends.set(key, now);

  try {
    const attemptLabel = `Email send attempt for ${key} #${retryCount}`;
    console.time(attemptLabel);
    // Prefer Brevo HTTP API if API key is set; fallback to SMTP
    if (BREVO_API_KEY) {
      try {
        const info = await sendViaBrevo(mailOptions);
        console.timeEnd(attemptLabel);
        return info;
      } catch (apiErr: any) {
        console.warn('Brevo API send failed; evaluating retry/fallback:', apiErr?.message || String(apiErr));
        // Retry Brevo once for transient errors before falling back to SMTP
        const apiTransient = /BREVO_API_TIMEOUT|timeout|ECONNRESET|EHOSTUNREACH|ENETUNREACH/.test(apiErr?.message || '');
        if (apiTransient && retryCount < MAX_RETRY_ATTEMPTS) {
          const backoff = RETRY_BASE_MS * Math.pow(2, retryCount) + Math.floor(Math.random() * 500);
          console.log(`Brevo API transient error (attempt ${retryCount + 1}). Retrying in ${backoff}ms...`, apiErr?.message);
          await sleep(backoff);
          const info = await sendViaBrevo(mailOptions);
          console.timeEnd(attemptLabel);
          return info;
        }
        // continue to SMTP path below if API fails or non-transient
      }
    }
    // Attempt SMTP send with built-in transporter timeouts
    const info = await transporter.sendMail(mailOptions);
    console.timeEnd(attemptLabel);
    return info;
  } catch (error: any) {
    const attemptLabel = `Email send attempt for ${key} #${retryCount}`;
    try { console.timeEnd(attemptLabel); } catch (_) {}
    const usingJsonTransport = !EMAIL_CONFIGURED && !BREVO_API_KEY;

    // Determine if error is transient and worth retrying
    const transientCodes = new Set(['ETIMEDOUT', 'ECONNRESET', 'EHOSTUNREACH', 'ENETUNREACH']);
    const isTransient = transientCodes.has(error?.code) || /timeout/i.test(error?.message || '') || /socket/i.test(error?.message || '') || /BREVO_API_TIMEOUT/.test(error?.message || '');

    // Immediate SMTPS fallback when STARTTLS (587) times out to avoid long retries
    if (!usingJsonTransport && EMAIL_PORT === 587 && (error?.code === 'ETIMEDOUT' || /timeout/i.test(error?.message || ''))) {
      try {
        console.log('Detected STARTTLS timeout; attempting immediate SMTPS (465) fallback...');
        const altTransporter = nodemailer.createTransport(<any>{
          host: EMAIL_HOST!,
          port: 465,
          secure: true,
          auth: { user: EMAIL_USER!, pass: EMAIL_PASS! },
          connectionTimeout: 8000,
          greetingTimeout: 8000,
          socketTimeout: 12000,
          pool: false,
          logger: true,
          debug: true,
        });
        const info = await altTransporter.sendMail(mailOptions);
        console.log('SMTPS (465) immediate fallback succeeded');
        return info;
      } catch (altErr) {
        console.warn('SMTPS immediate fallback failed:', (altErr as any)?.message || String(altErr));
        // proceed to normal transient backoff below
      }
    }

    if (isTransient && retryCount < MAX_RETRY_ATTEMPTS) {
      const backoff = RETRY_BASE_MS * Math.pow(2, retryCount) + Math.floor(Math.random() * 500);
      console.log(`Email send transient error (attempt ${retryCount + 1}). Retrying in ${backoff}ms...`, error?.code || error?.message);
      await sleep(backoff);
      return sendEmailWithRetry(mailOptions, retryCount + 1, true);
    }

    // Primary exhausted or non-transient: attempt fallback provider once if configured and not in log-only mode
    if (!usingJsonTransport && fallbackTransporter) {
      try {
        console.log('Attempting fallback SMTP provider...');
        const info = await fallbackTransporter.sendMail(mailOptions);
        console.log('Fallback email sent successfully');
        return info;
      } catch (fallbackErr) {
        console.error('Fallback SMTP sending failed:', fallbackErr);
        throw fallbackErr;
      }
    }

    // If STARTTLS (587) is timing out repeatedly and no explicit fallback is configured,
    // attempt a one-time SMTPS (465) send using the same credentials.
    if (!usingJsonTransport && EMAIL_PORT === 587 && (error?.code === 'ETIMEDOUT' || /timeout/i.test(error?.message || ''))) {
      try {
        console.log('STARTTLS appears to be timing out; attempting SMTPS (port 465) once...');
        const altTransporter = nodemailer.createTransport(<any>{
          host: EMAIL_HOST!,
          port: 465,
          secure: true,
          auth: { user: EMAIL_USER!, pass: EMAIL_PASS! },
          connectionTimeout: 8000,
          greetingTimeout: 8000,
          socketTimeout: 12000,
          pool: false,
          logger: true,
          debug: true,
        });
        const info = await altTransporter.sendMail(mailOptions);
        console.log('SMTPS (465) email sent successfully as alternate path');
        return info;
      } catch (altErr) {
        console.error('Alternate SMTPS (465) send failed:', (altErr as any)?.message || String(altErr));
      }
    }

    // No more retries; rethrow error
    throw error;
  } finally {
    // Clear dedupe registry entry after completion
    inFlightSends.delete(key);
  }
};

// Send verification email
export const sendVerificationEmail = async (user: User): Promise<EmailDeliveryMeta> => {
  try {
    console.log(`Attempting to send verification email to: ${user.email}`);
    // Generate verification token if missing or expired
    const needsNewToken = !user.emailVerificationToken || !user.emailVerificationExpires || user.emailVerificationExpires <= new Date();
    const token = needsNewToken ? await generateVerificationToken(user) : (user.emailVerificationToken as string);
    
    // Create verification URL
    const verificationUrl = `${APP_URL}/verify-email/${token}`;
    
    // Email content
    const mailOptions = {
      from: EMAIL_FROM,
      to: user.email,
      subject: 'CiviTrack - Verify Your Email',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a6ee0;">Welcome to CiviTrack!</h2>
          <p>Thank you for registering. Please verify your email address by clicking the button below:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" style="background-color: #4a6ee0; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Verify Email</a>
          </div>
          <p>Or copy and paste this link in your browser:</p>
          <p style="word-break: break-all;">${verificationUrl}</p>
          <p>This link will expire in 24 hours.</p>
          <p>If you did not create an account, please ignore this email.</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">CiviTrack - Community Engagement Platform</p>
        </div>
      `,
    };
    
    const meta = await attemptImmediateEmailSend(mailOptions);
    if (meta.status === 'accepted') {
      console.log('Verification email accepted by provider:', meta.messageId || 'n/a');
    } else if (meta.status === 'deferred') {
      console.log('Verification email deferred; background delivery scheduled');
    } else if (meta.status === 'failed') {
      console.warn('Verification email failed immediately:', meta.error);
    } else {
      console.log('Verification email logged-only (no send)');
    }
    return meta;
  } catch (error) {
    console.error('Error sending verification email:', error);
    return { attempted: EMAIL_CONFIGURED || !!BREVO_API_KEY, channel: BREVO_API_KEY ? 'brevo_api' : (EMAIL_CONFIGURED ? 'smtp' : 'log-only'), status: 'failed', error: (error as any)?.message || String(error) };
  }
};

// Send password reset email
export const sendPasswordResetEmail = async (user: User): Promise<EmailDeliveryMeta> => {
  try {
    console.log(`Attempting to send password reset email to: ${user.email}`);
    // Generate or reuse password reset token (avoid duplicates if still valid)
    const hasValidToken = user.resetPasswordToken && user.resetPasswordExpires && new Date(user.resetPasswordExpires).getTime() > Date.now();
    const token = hasValidToken ? (user.resetPasswordToken as string) : crypto.randomBytes(20).toString('hex');
    const expires = hasValidToken ? new Date(user.resetPasswordExpires as any) : new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    if (!hasValidToken) {
      user.resetPasswordToken = token;
      user.resetPasswordExpires = expires;
      await user.save();
    }
    
    // Create reset URL
    const resetUrl = `${APP_URL}/reset-password/${token}`;
    
    // Email content
    const mailOptions = {
      from: EMAIL_FROM,
      to: user.email,
      subject: 'CiviTrack - Password Reset Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a6ee0;">Password Reset Request</h2>
          <p>We received a request to reset your password. Click the button below to reset it:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" style="background-color: #4a6ee0; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Reset Password</a>
          </div>
          <p>Or copy and paste this link in your browser:</p>
          <p style="word-break: break-all;">${resetUrl}</p>
          <p>This link will expire in 1 hour.</p>
          <p>If you did not request a password reset, please ignore this email.</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">CiviTrack - Community Engagement Platform</p>
        </div>
      `,
    };
    
    const meta = await attemptImmediateEmailSend(mailOptions);
    if (meta.status === 'accepted') {
      console.log('Password reset email accepted by provider:', meta.messageId || 'n/a');
    } else if (meta.status === 'deferred') {
      console.log('Password reset email deferred; background delivery scheduled');
    } else if (meta.status === 'failed') {
      console.warn('Password reset email failed immediately:', meta.error);
    } else {
      console.log('Password reset email logged-only (no send)');
    }
    return meta;
  } catch (error) {
    console.error('Error sending password reset email:', error);
    return { attempted: EMAIL_CONFIGURED || !!BREVO_API_KEY, channel: BREVO_API_KEY ? 'brevo_api' : (EMAIL_CONFIGURED ? 'smtp' : 'log-only'), status: 'failed', error: (error as any)?.message || String(error) };
  }
};

// Verify email token
export const verifyEmailToken = async (token: string): Promise<User | null> => {
  try {
    console.log(`Attempting to verify email token: ${token}`);
    // Find user with matching token that hasn't expired
    const user = await User.findOne({
      where: {
        emailVerificationToken: token,
        emailVerificationExpires: { [Op.gt]: new Date() },
      },
    });
    
    if (!user) {
      console.log(`No user found for token: ${token} or token expired.`);
      // Check if a user exists with the token but it's expired
      const expiredUser = await User.findOne({
        where: {
          emailVerificationToken: token,
        },
      });
      if (expiredUser) {
        console.log(`User found for token ${token}, but token is expired. Expiry: ${expiredUser.emailVerificationExpires}`);
      }
      return null;
    }
    
    console.log(`User ${user.email} found for token ${token}. Marking email as verified.`);
    // Mark email as verified and clear token
    user.isEmailVerified = true;
    user.emailVerificationToken = null;
    user.emailVerificationExpires = null;
    
    // Save user
    await user.save();
    console.log(`User ${user.email} email verification status updated.`);
    
    return user;
  } catch (error) {
    console.error('Error verifying email token:', error);
    return null;
  }
};

// Verify reset token
export const verifyResetToken = async (token: string): Promise<User | null> => {
  try {
    const user = await User.findOne({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: { [Op.gt]: new Date() },
      },
    });
    
    return user;
  } catch (error) {
    console.error('Error verifying reset token:', error);
    return null;
  }
};


export interface EmailHealth {
  smtpConfigured: boolean;
  smtpReachable: boolean;
  host: string;
  port: number;
  mode: 'smtp' | 'log-only' | 'brevo_api';
  ok: boolean; // overall email health indicator
  error?: string;
}

export const checkEmailHealth = async (): Promise<EmailHealth> => {
  try {
    if (BREVO_API_KEY) {
      try {
        await brevoRequest('account', 'GET', undefined, 5000);
        return {
          smtpConfigured: EMAIL_CONFIGURED,
          smtpReachable: true,
          host: EMAIL_HOST || 'brevo-api',
          port: EMAIL_PORT,
          mode: 'brevo_api',
          ok: true
        };
      } catch (apiErr: any) {
        return {
          smtpConfigured: EMAIL_CONFIGURED,
          smtpReachable: false,
          host: EMAIL_HOST || 'brevo-api',
          port: EMAIL_PORT,
          mode: 'brevo_api',
          ok: false,
          error: apiErr?.message || 'BREVO_API_UNREACHABLE'
        };
      }
    } else if (EMAIL_CONFIGURED) {
      // Verify with a short timeout to avoid blocking
      const withTimeout = <T>(p: Promise<T>, ms: number) => Promise.race([
        p,
        new Promise<T>((_, reject) => setTimeout(() => reject(new Error('EMAIL_VERIFY_TIMEOUT')), ms))
      ]);
      try {
        await withTimeout(transporter.verify(), 6000);
        return {
          smtpConfigured: true,
          smtpReachable: true,
          host: EMAIL_HOST!,
          port: EMAIL_PORT,
          mode: 'smtp',
          ok: true
        };
      } catch (primaryErr: any) {
        // If primary verify times out on STARTTLS (587), attempt SMTPS(465) verify fallback
        const timedOut = primaryErr?.message === 'EMAIL_VERIFY_TIMEOUT' || /timeout/i.test(primaryErr?.message || '');
        if (EMAIL_CONFIGURED && EMAIL_PORT === 587 && timedOut) {
          try {
            console.log('Email verify timeout on STARTTLS; attempting SMTPS (465) verify fallback...');
            const altTransporter = nodemailer.createTransport(<any>{
              host: EMAIL_HOST!,
              port: 465,
              secure: true,
              auth: { user: EMAIL_USER!, pass: EMAIL_PASS! },
              connectionTimeout: 8000,
              greetingTimeout: 8000,
              socketTimeout: 12000,
              pool: false,
              logger: true,
              debug: true,
            });
            await withTimeout(altTransporter.verify(), 5000);
            return {
              smtpConfigured: true,
              smtpReachable: true,
              host: EMAIL_HOST!,
              port: 465,
              mode: 'smtp',
              ok: true
            };
          } catch (altVerifyErr: any) {
            // fall through to outer catch to report failure
            throw altVerifyErr;
          }
        }
        throw primaryErr;
      }
    } else {
      // In log-only mode, we consider transport reachable but not configured; mark ok=false to surface config issue
      return {
        smtpConfigured: false,
        smtpReachable: true,
        host: EMAIL_HOST || 'unknown',
        port: EMAIL_PORT,
        mode: 'log-only',
        ok: false
      };
    }
  } catch (err: any) {
    return {
      smtpConfigured: EMAIL_CONFIGURED,
      smtpReachable: false,
      host: EMAIL_HOST || 'unknown',
      port: EMAIL_PORT,
      mode: EMAIL_CONFIGURED ? 'smtp' : 'log-only',
      ok: false,
      error: err?.message || String(err)
    };
  }
};