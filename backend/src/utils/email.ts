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

// Determine if email is properly configured
const isPlaceholderValue = (v?: string) => (
  !v || v === 'smtp.example.com' || v === 'user@example.com' || v === 'password' || v.trim() === ''
);

const EMAIL_CONFIGURED = (
  !isPlaceholderValue(EMAIL_HOST) &&
  !isPlaceholderValue(EMAIL_USER) &&
  !isPlaceholderValue(EMAIL_PASS)
);

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
  });
} else {
  // Use jsonTransport to avoid network calls; emails will be logged only
  transporter = nodemailer.createTransport({ jsonTransport: true });
  console.warn('Email service is not fully configured. Running in log-only mode. Set EMAIL_HOST/USER/PASS to enable SMTP sending.');
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

// Send verification email
export const sendVerificationEmail = async (user: User): Promise<void> => {
  try {
    console.log(`Attempting to send verification email to: ${user.email}`);
    // Generate verification token if missing or expired
    const needsNewToken = !user.emailVerificationToken || !user.emailVerificationExpires || user.emailVerificationExpires <= new Date();
    const token = needsNewToken ? await generateVerificationToken(user) : (user.emailVerificationToken as string);
    
    // Create verification URL
    const verificationUrl = `${APP_URL}/verify-email?token=${token}`;
    
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
    
    // Send or log email
    const info = await transporter.sendMail(mailOptions);
    if (!EMAIL_CONFIGURED) {
      console.log('Verification email generated (log-only mode):', info);
    } else {
      console.log('Verification email sent successfully:', info.response);
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
    // Generate password reset token
    const token = crypto.randomBytes(20).toString('hex');
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    
    user.resetPasswordToken = token;
    user.resetPasswordExpires = expires;
    await user.save();
    
    // Create reset URL
    const resetUrl = `${APP_URL}/reset-password?token=${token}`;
    
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
    
    // Send or log email
    const info = await transporter.sendMail(mailOptions);
    if (!EMAIL_CONFIGURED) {
      console.log('Password reset email generated (log-only mode):', info);
    } else {
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
    // Find user with matching token that hasn't expired
    const user = await User.findOne({
      where: {
        emailVerificationToken: token,
        emailVerificationExpires: { [Op.gt]: new Date() },
      },
    });
    
    if (!user) {
      return null;
    }
    
    // Mark email as verified and clear token
    user.isEmailVerified = true;
    user.emailVerificationToken = null;
    user.emailVerificationExpires = null;
    
    // Save user
    await user.save();
    
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
  error?: string;
}

export const checkEmailHealth = async (): Promise<EmailHealth> => {
  try {
    if (EMAIL_CONFIGURED) {
      await transporter.verify();
      return {
        smtpConfigured: true,
        smtpReachable: true,
        host: EMAIL_HOST!,
        port: EMAIL_PORT,
        mode: 'smtp'
      };
    } else {
      // In log-only mode, we consider it reachable but not configured
      return {
        smtpConfigured: false,
        smtpReachable: true,
        host: EMAIL_HOST || 'unknown', // Provide a fallback for log-only mode
        port: EMAIL_PORT,
        mode: 'log-only'
      };
    }
  } catch (err: any) {
    return {
      smtpConfigured: EMAIL_CONFIGURED,
      smtpReachable: false,
      host: EMAIL_HOST || 'unknown', // Provide a fallback for log-only mode
      port: EMAIL_PORT,
      mode: EMAIL_CONFIGURED ? 'smtp' : 'log-only',
      error: err?.message || String(err)
    };
  }
};