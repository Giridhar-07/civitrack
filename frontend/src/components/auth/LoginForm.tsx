import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Paper, Link, CircularProgress, FormControlLabel, Checkbox, Alert } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import authService, { LoginCredentials } from '../../services/authService';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [verificationMessage, setVerificationMessage] = useState<string | null>(null);
  const [resendLoading, setResendLoading] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if redirected from registration or email verification
    const state = location.state as any;
    if (state?.showVerificationMessage) {
      setVerificationMessage('Please check your email to verify your account before logging in.');
      if (state.email) {
        setCredentials(prev => ({
          ...prev,
          email: state.email
        }));
      }
    } else if (state?.emailVerified && state?.justVerified) {
      setVerificationMessage('Your email has been successfully verified! You can now log in.');
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      console.log('Submitting login form with credentials:', { email: credentials.email });
      const response = await authService.login(credentials);
      console.log('Login successful, navigating to home page');
      
      // Force a full page reload to ensure all components update with the new auth state
      // This is more reliable than just navigating
      window.location.href = '/';
      
      return response;
    } catch (err: any) {
      console.error('Login failed:', err);
      
      // Extract detailed error message from response
      let errorMessage = 'Login failed. Please try again.';
      
      // Handle different error types
      if (err.errorCode === 'NETWORK_ERROR') {
        // Handle network errors
        errorMessage = err.message || 'Network connection issue. Please check your internet connection and try again.';
      } else if (err.errorCode === 'TIMEOUT_ERROR') {
        // Handle timeout errors
        errorMessage = err.message || 'Server response timeout. The system will automatically retry. Please wait a moment.';
      } else if (err.response?.status === 429 || err.statusCode === 429 || err.status === 429) {
        // Handle rate limiting errors
        const retryAfter = err.retryAfter || 60;
        errorMessage = `Too many login attempts. Please try again after ${Math.ceil(retryAfter / 60)} minute(s).`;
      } else if (err.response?.status === 401 || err.statusCode === 401 || err.status === 401) {
        // Handle authentication errors - check response.status, statusCode and status properties
        errorMessage = 'Invalid email or password. Please try again.';
      } else if (err.response?.data?.message) {
        // Use server error message if available
        errorMessage = err.response.data.message;
      } else if (err.message) {
        // Use the error message if available
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    if (!credentials.email) {
      setError('Please enter your email address to resend verification');
      return;
    }
    
    setResendLoading(true);
    try {
      await authService.resendVerificationEmail(credentials.email);
      setVerificationMessage('Verification email has been sent. Please check your inbox.');
      setError(null);
    } catch (err: any) {
      console.error('Resend verification error:', err);
      setError(err.response?.data?.message || 'Failed to resend verification email. Please try again.');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 4, backgroundColor: '#000', color: '#fff', borderRadius: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Sign In
      </Typography>
      
      {verificationMessage && (
        <Alert 
          severity="info" 
          sx={{ mb: 3 }}
          action={
            <Button 
              color="inherit" 
              size="small" 
              onClick={handleResendVerification}
              disabled={resendLoading}
            >
              {resendLoading ? 'Sending...' : 'Resend'}
            </Button>
          }
        >
          {verificationMessage}
        </Alert>
      )}
      
      {error && (
        <Box sx={{ mb: 2, p: 2, backgroundColor: 'rgba(244, 67, 54, 0.1)', borderRadius: 1 }}>
          {error.split('\n').map((line, index) => (
            <Typography key={index} color="error" variant="body2" sx={{ mb: index < error.split('\n').length - 1 ? 1 : 0 }}>
              {line}
            </Typography>
          ))}
        </Box>
      )}
      
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={credentials.email}
          onChange={handleChange}
          helperText="Enter your registered email address"
          FormHelperTextProps={{
            sx: { color: '#aaa' }
          }}
          sx={{ 
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#444',
              },
              '&:hover fieldset': {
                borderColor: '#666',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#aaa',
            },
            '& .MuiInputBase-input': {
              color: '#fff',
            },
          }}
        />
        
        <FormControlLabel
          control={
            <Checkbox
              name="rememberMe"
              checked={credentials.rememberMe}
              onChange={handleChange}
              color="primary"
            />
          }
          label="Remember me"
          sx={{ mt: 1, mb: 2, color: '#fff' }}
        />
        
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={credentials.password}
          onChange={handleChange}
          helperText="Password must contain uppercase, lowercase, and number"
          FormHelperTextProps={{
            sx: { color: '#aaa' }
          }}
          sx={{ 
            mb: 3,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#444',
              },
              '&:hover fieldset': {
                borderColor: '#666',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#aaa',
            },
            '& .MuiInputBase-input': {
              color: '#fff',
            },
          }}
        />
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          sx={{ 
            mt: 2, 
            mb: 2, 
            py: 1.5,
            backgroundColor: '#4CAF50',
            '&:hover': {
              backgroundColor: '#388E3C',
            },
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
        </Button>
        
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2" sx={{ color: '#aaa', mb: 1 }}>
            <Link 
              onClick={() => navigate('/forgot-password')} 
              sx={{ 
                cursor: 'pointer', 
                color: '#4CAF50',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                }
              }}
            >
              Forgot password?
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            Don't have an account?{' '}
            <Link 
              onClick={() => navigate('/register')} 
              sx={{ 
                cursor: 'pointer', 
                color: '#4CAF50',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Register here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginForm;