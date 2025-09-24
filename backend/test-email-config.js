const nodemailer = require('nodemailer');
require('dotenv').config({ path: './.env' }); // Load environment variables from backend/.env

// Email configuration from your .env file
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || '587', 10);
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_FROM = process.env.EMAIL_FROM;

console.log('Testing email configuration:');
console.log('EMAIL_HOST:', EMAIL_HOST);
console.log('EMAIL_PORT:', EMAIL_PORT);
console.log('EMAIL_USER:', EMAIL_USER);
console.log('EMAIL_FROM:', EMAIL_FROM);
// Note: Never log passwords in production

if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS) {
  console.error('Error: Missing one or more email environment variables (EMAIL_HOST, EMAIL_USER, EMAIL_PASS). Please ensure they are set in backend/.env');
  process.exit(1);
}

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

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
    
    // Try sending a test email
    const mailOptions = {
      from: EMAIL_FROM,
      to: 'giridharmalagi7@gmail.com', // Send to the specified email for testing
      subject: 'Test Email from CiviTrack',
      text: 'This is a test email to verify SMTP configuration.',
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending test email:', err);
      } else {
        console.log('Test email sent successfully:', info.response);
      }
    });
  }
});