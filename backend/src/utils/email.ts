import nodemailer, { Transporter } from 'nodemailer';
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

console.log('Email Config Status:');
console.log(`  EMAIL_HOST: ${EMAIL_HOST}`);
console.log(`  EMAIL_PORT: ${EMAIL_PORT}`);
console.log(`  EMAIL_USER: ${EMAIL_USER}`);
console.log(`  EMAIL_FROM: ${EMAIL_FROM}`);
console.log(`  APP_URL: ${APP_URL}`);
console.log(`  EMAIL_PASS: ${EMAIL_PASS ? '********' : 'NOT SET'}`); // Mask password for logs
 
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

// Create nodemailer transporter (log-only mode when not configured)
let transporter: Transporter;
if (EMAIL_CONFIGURED) {
  transporter = nodemailer.createTransport({
    host: EMAIL_HOST!,
    port: EMAIL_PORT,
    secure: EMAIL_PORT === 465, // true for 465, false for other ports
    auth: {
      user: EMAIL_USER!,
      pass: EMAIL_PASS!,
    },
    // Faster timeouts to avoid long hangs
    connectionTimeout: 5000, // 5 seconds
    greetingTimeout: 5000,   // 5 seconds
    socketTimeout: 7000,     // 7 seconds
    // Enable a small pool to reuse connections efficiently
    pool: true,
    maxConnections: 3,
    maxMessages: 10,
  });
} else {
  // Use jsonTransport to avoid network calls; emails will be logged only
  transporter = nodemailer.createTransport({ jsonTransport: true });
  console.warn('Email service is not fully configured. Running in log-only mode. Set EMAIL_HOST/USER/PASS to enable SMTP sending.');
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
const MAX_RETRY_ATTEMPTS = 5;
// Base delay between retry attempts in milliseconds (exponential backoff with jitter)
const RETRY_BASE_MS = 2000;
// Deduplication window to prevent duplicate sends (in ms)
const DEDUPE_WINDOW_MS = 2 * 60 * 1000; // 2 minutes

// In-flight/ recent send registry to prevent duplicates
const inFlightSends = new Map<string, number>();

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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
    // Attempt send with built-in transporter timeouts
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error: any) {
    const usingJsonTransport = !EMAIL_CONFIGURED;

    // Determine if error is transient and worth retrying
    const transientCodes = new Set(['ETIMEDOUT', 'ECONNRESET', 'EHOSTUNREACH', 'ENETUNREACH']);
    const isTransient = transientCodes.has(error?.code) || /timeout/i.test(error?.message || '') || /socket/i.test(error?.message || '');

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

    // No more retries; rethrow error
    throw error;
  } finally {
    // Clear dedupe registry entry after completion
    inFlightSends.delete(key);
  }
};

// Send verification email
export const sendVerificationEmail = async (user: User): Promise<void> => {
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
    
    // Send or log email with retry mechanism
    if (!EMAIL_CONFIGURED) {
      console.log('Verification email generated (log-only mode):', mailOptions);
    } else {
      const info = await sendEmailWithRetry(mailOptions);
      console.log('Verification email sent successfully:', info?.messageId || info?.response || JSON.stringify(info));
    }
  } catch (error) {
    console.error('Error sending verification email:', error);
    // In log-only mode, do not throw to avoid noisy logs
    if (EMAIL_CONFIGURED) {
      throw new Error('Failed to send verification email');
    }
  }
};

// Send password reset email
export const sendPasswordResetEmail = async (user: User): Promise<void> => {
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
    
    // Send or log email with retry mechanism
    if (!EMAIL_CONFIGURED) {
      console.log('Password reset email generated (log-only mode):', mailOptions);
    } else {
      const info = await sendEmailWithRetry(mailOptions);
      console.log('Password reset email sent successfully:', info.response);
    }
  } catch (error) {
    console.error('Error sending password reset email:', error);
    if (EMAIL_CONFIGURED) {
      throw new Error('Failed to send password reset email');
    }
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
  mode: 'smtp' | 'log-only';
  ok: boolean; // overall email health indicator
  error?: string;
}

export const checkEmailHealth = async (): Promise<EmailHealth> => {
  try {
    if (EMAIL_CONFIGURED) {
      // Verify with a short timeout to avoid blocking
      const withTimeout = <T>(p: Promise<T>, ms: number) => Promise.race([
        p,
        new Promise<T>((_, reject) => setTimeout(() => reject(new Error('EMAIL_VERIFY_TIMEOUT')), ms))
      ]);
      await withTimeout(transporter.verify(), 1500);
      return {
        smtpConfigured: true,
        smtpReachable: true,
        host: EMAIL_HOST!,
        port: EMAIL_PORT,
        mode: 'smtp',
        ok: true
      };
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