import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Link, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import authService, { RegisterData } from '../../services/authService';
import { extractErrorMessage, formatFieldErrors } from '../../utils/apiErrorHandler';

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterData>({
    username: '',
    email: '',
    password: '',
    name: ''
  });
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
      // Clear confirmPassword field error as user types
      setFieldErrors(prev => {
        const { confirmPassword: _removed, ...rest } = prev;
        return rest;
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      // Clear field-specific error for the changed field
      setFieldErrors(prev => {
        const { [name]: _removed, ...rest } = prev;
        return rest;
      });
    }
  };

  const validateForm = (): boolean => {
    const newFieldErrors: Record<string, string> = {};

    // Required fields
    if (!formData?.name?.trim()) {
      newFieldErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      newFieldErrors.name = 'Name must be between 2 and 100 characters';
    }

    if (!formData.username.trim()) {
      newFieldErrors.username = 'Username is required';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newFieldErrors.username = 'Username can only contain letters, numbers, and underscores';
    } else if (formData.username.length < 3 || formData.username.length > 30) {
      newFieldErrors.username = 'Username must be between 3 and 30 characters';
    }

    if (!formData.email.trim()) {
      newFieldErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newFieldErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newFieldErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newFieldErrors.password = 'Password must be at least 8 characters';
    } else {
      // Check password complexity using the exact same regex as the backend
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(formData.password)) {
        newFieldErrors.password = 'Password must be at least 8 characters and include an uppercase letter, a lowercase letter, and a number';
      }
    }

    if (confirmPassword.length === 0) {
      newFieldErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== confirmPassword) {
      newFieldErrors.confirmPassword = 'Passwords do not match';
    }

    setFieldErrors(newFieldErrors);
    if (Object.keys(newFieldErrors).length > 0) {
      setError('Please fix the highlighted fields.');
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await authService.register(formData);

      // After registration, always show verification message and redirect to login
      // The token is not stored in localStorage (modified in authService)
      setSuccess(true);
      setTimeout(() => {
        navigate('/login', {
          state: {
            showVerificationMessage: true,
            email: formData.email,
            justRegistered: true
          }
        });
      }, 3000);
    } catch (err: any) {
      console.error('Registration failed:', err);

      // Use standardized error extraction
      const apiErr = extractErrorMessage(err);

      // Map field errors if present
      if (apiErr.fieldErrors) {
        const mapped = formatFieldErrors(apiErr.fieldErrors);
        setFieldErrors(prev => ({ ...prev, ...mapped }));
      }

      // Friendly user-facing messages based on status/errorCode
      let friendlyMessage = apiErr.message || 'Registration failed. Please try again.';

      // Network/offline/timeout
      if (apiErr.errorCode === 'OFFLINE_ERROR') {
        friendlyMessage = 'You are currently offline. Please check your internet connection and try again.';
      } else if (apiErr.errorCode === 'TIMEOUT_ERROR') {
        friendlyMessage = 'Request timed out. The server is taking too long to respond. Please try again later.';
      } else if (apiErr.errorCode === 'NETWORK_ERROR' || apiErr.isNetworkError) {
        friendlyMessage = 'Network connection issue. Please check your internet connection and try again.';
      }

      // HTTP status-specific
      switch (apiErr.statusCode) {
        case 409:
          // Conflict: likely email or username already exists
          if (apiErr.fieldErrors) {
            friendlyMessage = 'An account with these details already exists. Please correct the highlighted fields.';
          } else {
            friendlyMessage = 'An account with this email or username already exists.';
          }
          break;
        case 422:
          friendlyMessage = 'Some details are invalid. Please correct the highlighted fields.';
          break;
        case 429:
          friendlyMessage = 'Too many attempts. Please wait a while and try again.';
          break;
        case 400:
          // Generic invalid request
          if (!apiErr.fieldErrors) {
            friendlyMessage = apiErr.message || 'Invalid registration details. Please review and try again.';
          }
          break;
        default:
          // keep extracted message
          break;
      }

      setError(friendlyMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 4, backgroundColor: '#000', color: '#fff', borderRadius: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Create Account
      </Typography>
      
      {success ? (
        <Alert severity="success" sx={{ mb: 3 }}>
          Registration successful! Please check your email to verify your account.
          You will be redirected to the login page shortly...
        </Alert>
      ) : error ? (
        <Box sx={{ mb: 2, p: 2, backgroundColor: 'rgba(244, 67, 54, 0.1)', borderRadius: 1 }}>
          {error.split('\n').map((line, index) => (
            <Typography key={index} color="error" variant="body2" sx={{ mb: index < error.split('\n').length - 1 ? 1 : 0 }}>
              {line}
            </Typography>
          ))}
        </Box>
      ) : null}
      
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(fieldErrors.name)}
          helperText={fieldErrors.name || 'Enter your full name (2-100 characters)'}
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
        
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={formData.username}
          onChange={handleChange}
          error={Boolean(fieldErrors.username)}
          helperText={fieldErrors.username || '3-30 characters, letters, numbers and underscores only'}
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
        
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(fieldErrors.email)}
          helperText={fieldErrors.email || 'Enter a valid email address'}
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
        
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(fieldErrors.password)}
          helperText={fieldErrors.password || 'Must be at least 8 characters with 1 uppercase letter, 1 lowercase letter, and 1 number'}
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
        
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={handleChange}
          error={Boolean(fieldErrors.confirmPassword)}
          helperText={fieldErrors.confirmPassword || 'Re-enter your password to confirm'}
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
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
        </Button>
        
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2" sx={{ color: '#aaa' }}>
            Already have an account?{' '}
            <Link 
              onClick={() => navigate('/login')} 
              sx={{ 
                cursor: 'pointer', 
                color: '#4CAF50',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default RegisterForm;