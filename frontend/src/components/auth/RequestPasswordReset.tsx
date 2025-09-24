import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Link, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const RequestPasswordReset: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await authService.requestPasswordReset(email);
      setSuccess(true);
    } catch (err: any) {
      console.error('Password reset request error:', err);
      setError(err.response?.data?.message || 'Failed to request password reset. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', backgroundColor: '#000', color: '#fff', borderRadius: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Reset Password
        </Typography>

        {success ? (
          <>
            <Alert severity="success" sx={{ mb: 3 }}>
              Password reset instructions have been sent to your email.
            </Alert>
            <Typography variant="body1" paragraph>
              Please check your inbox and follow the instructions to reset your password.
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleGoToLogin}
              sx={{ mt: 2 }}
            >
              Return to Login
            </Button>
          </>
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate>
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Typography variant="body1" paragraph>
              Enter your email address and we'll send you instructions to reset your password.
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleChange}
              disabled={loading}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? <CircularProgress size={24} /> : 'Send Reset Instructions'}
            </Button>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Link href="/login" variant="body2" color="primary" onClick={(e) => { e.preventDefault(); handleGoToLogin(); }}>
                Back to Login
              </Link>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default RequestPasswordReset;