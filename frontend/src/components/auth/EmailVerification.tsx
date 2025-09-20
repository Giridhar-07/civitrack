import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography, Paper, Button, CircularProgress, Alert } from '@mui/material';
import authService from '../../services/authService';

const EmailVerification: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Support both /verify-email/:token and /verify-email?token=...
  const searchParams = new URLSearchParams(location.search);
  const queryToken = searchParams.get('token') || undefined;
  const effectiveToken = token || queryToken;

  useEffect(() => {
    const verifyEmail = async () => {
      if (!effectiveToken) {
        setError('Verification token is missing');
        setLoading(false);
        return;
      }

      try {
        const response = await authService.verifyEmail(effectiveToken);
        setSuccess(true);
        setLoading(false);
        
        // Automatically redirect to login page after 3 seconds
        setTimeout(() => {
          handleGoToLogin();
        }, 3000);
      } catch (err: any) {
        console.error('Email verification error:', err);
        setError(err.response?.data?.message || 'Failed to verify email. The token may be invalid or expired.');
        setLoading(false);
      }
    };

    verifyEmail();
  }, [effectiveToken]);

  const handleResendVerification = async () => {
    const email = prompt('Please enter your email address to resend verification');
    if (!email) return;

    try {
      setLoading(true);
      await authService.resendVerificationEmail(email);
      alert('Verification email has been sent. Please check your inbox.');
    } catch (err: any) {
      console.error('Resend verification error:', err);
      alert(err.response?.data?.message || 'Failed to resend verification email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoToLogin = () => {
    navigate('/login', { 
      state: { 
        emailVerified: true,
        justVerified: true
      } 
    });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500, width: '100%', backgroundColor: '#000', color: '#fff', borderRadius: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Email Verification
        </Typography>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : success ? (
          <>
            <Alert severity="success" sx={{ mb: 3 }}>
              Verification successful
            </Alert>
            <Typography variant="body1" paragraph>
              You can now log in to your account with your credentials.
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleGoToLogin}
              sx={{ mt: 2 }}
            >
              Go to Login
            </Button>
          </>
        ) : (
          <>
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
            <Typography variant="body1" paragraph>
              The verification link may have expired or is invalid.
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={handleResendVerification}
              sx={{ mt: 2, mb: 2 }}
            >
              Resend Verification Email
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleGoToLogin}
            >
              Go to Login
            </Button>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default EmailVerification;