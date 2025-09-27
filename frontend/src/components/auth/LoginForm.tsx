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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setVerificationMessage(null);

    // Client-side validation: email format and required password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!credentials.email || !emailRegex.test(credentials.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!credentials.password || credentials.password.trim().length === 0) {
      setError('Please enter your password.');
      return;
    }

    setLoading(true);

    try {
      const response = await authService.login(credentials);
      console.log('Login successful');
      localStorage.setItem('token', response.token);
      window.location.href = '/';
      return null;
    } catch (err: any) {
      console.error('Login error:', err);

      // Normalize common fields from standardized error shape
      const status: number | undefined =
        typeof err?.statusCode === 'number' ? err.statusCode :
        (typeof err?.status === 'number' ? err.status : err?.response?.status);
      const errorCode: string | undefined = err?.errorCode;
      const isNetwork: boolean = err?.isNetworkError === true || errorCode === 'NETWORK_ERROR' || errorCode === 'OFFLINE_ERROR';
      const isTimeout: boolean = errorCode === 'TIMEOUT_ERROR' || err?.code === 'ECONNABORTED' || (typeof err?.message === 'string' && err.message.toLowerCase().includes('timeout'));
      const retryAfterHeader = err?.response?.headers?.['retry-after'];
      const retryAfter: number | undefined = typeof err?.retryAfter === 'number' ? err.retryAfter : (retryAfterHeader ? parseInt(retryAfterHeader, 10) : undefined);

      // Handle network/timeout issues first
      if (isNetwork) {
        setError('Unable to connect to the server. Please try again later.');
        return null;
      }
      if (isTimeout) {
        setError('Connection timed out. The server is taking too long to respond. Please try again later.');
        return null;
      }

      // Rate limiting
      if (status === 429) {
        const minutes = Math.ceil((retryAfter ?? 60) / 60);
        setError(`Too many login attempts. Please try again after ${minutes} minute(s).`);
        return null;
      }

      // Auth failure
      if (status === 401) {
        setError('Invalid email or password. Please try again.');
        return null;
      }

      // Unverified email: prefer standardized flags/codes
      const isUnverified = err?.isUnverifiedEmail === true || errorCode === 'EMAIL_NOT_VERIFIED' || (status === 403 && typeof err?.message === 'string' && /not verified|verify/i.test(err.message));
      if (isUnverified) {
        setVerificationMessage(err?.message || 'Your email is not verified. Please check your inbox or request a new verification email.');
        setError(null);
        return null;
      }

      // Default error message fallback
      const fallbackMsg = (typeof err?.message === 'string' && err.message)
        || err?.response?.data?.message
        || 'An error occurred during login. Please try again.';
      setError(fallbackMsg);
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
      setError(err?.message || 'Failed to resend verification email. Please try again.');
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