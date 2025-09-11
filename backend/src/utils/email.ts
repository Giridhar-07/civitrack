import nodemailer from 'nodemailer';
import { User } from '../models';
import crypto from 'crypto';
import { Op } from 'sequelize';

// Email configuration
const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.example.com';
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || '587', 10);
const EMAIL_USER = process.env.EMAIL_USER || 'user@example.com';
const EMAIL_PASS = process.env.EMAIL_PASS || 'password';
const EMAIL_FROM = process.env.EMAIL_FROM || 'CiviTrack <noreply@civitrack.com>';
const APP_URL = process.env.FRONTEND_URL || 'https://civitrack-dev.netlify.app';

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_PORT === 465, // true for 465, false for other ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Test email configuration in development
if (process.env.NODE_ENV !== 'production') {
  transporter.verify((error: Error | null) => {
    if (error) {
      console.log('Email configuration error:', error);
    } else {
      console.log('Email server is ready to send messages');
    }
  });
}

// Generate verification token
export const generateVerificationToken = async (user: User): Promise<string> => {
  // Generate a random token
  const token = crypto.randomBytes(32).toString('hex');
  
  // Set token and expiration (24 hours)
  user.emailVerificationToken = token;
  user.emailVerificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  
  // Save user
  await user.save();
  
  return token;
};

// Send verification email
export const sendVerificationEmail = async (user: User): Promise<void> => {
  try {
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
    
    // Send email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw new Error('Failed to send verification email');
  }
};

// Send password reset email
export const sendPasswordResetEmail = async (user: User): Promise<void> => {
  try {
    // Generate reset token
    const token = crypto.randomBytes(32).toString('hex');
    
    // Set token and expiration (1 hour)
    user.resetPasswordToken = token;
    user.resetPasswordExpires = new Date(Date.now() + 60 * 60 * 1000);
    
    // Save user
    await user.save();
    
    // Create reset URL
    const resetUrl = `${APP_URL}/reset-password?token=${token}`;
    
    // Email content
    const mailOptions = {
      from: EMAIL_FROM,
      to: user.email,
      subject: 'CiviTrack - Password Reset',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a6ee0;">Password Reset Request</h2>
          <p>You requested a password reset. Click the button below to reset your password:</p>
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
    
    // Send email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw new Error('Failed to send password reset email');
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

// Verify password reset token
export const verifyResetToken = async (token: string): Promise<User | null> => {
  try {
    // Find user with matching token that hasn't expired
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