import api, { USE_MOCK_SERVICE, BASE_URL } from './api';
import { User } from '../types';
import mockService from './mockService';

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  name?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  tokenExpiry?: string;
}

const authService = {
  // Robust health check function that tries multiple endpoints
  checkBackendHealth: async (): Promise<boolean> => {
    try {
      // Use resolved API base URL which typically ends with '/api'
      const baseUrl = (BASE_URL || '').replace(/\/$/, '');
      console.log('Checking backend health at:', baseUrl);
      
      // Define possible API URLs to try, including fallbacks
      const possibleApiUrls = [
        baseUrl,                                // Current API URL
        baseUrl.replace('/api', ''),           // Root domain
        'https://civitrack.onrender.com/api',  // Production URL
        'https://civitrack.onrender.com',      // Production root
        'http://localhost:5000/api',           // Local development
      ];
      
      // Try multiple endpoints with different approaches
      const endpoints = [];
      
      // Generate endpoints for each possible API URL
      for (const apiUrl of possibleApiUrls) {
        endpoints.push(
          { url: `${apiUrl}/health`, method: 'GET' },
          { url: `${apiUrl}/api/health`, method: 'GET' },
          { url: `${apiUrl}/`, method: 'GET' },
          { url: `${apiUrl}/status`, method: 'GET' }
        );
      }
      
      // Try each endpoint until one succeeds with increased timeout
      for (const endpoint of endpoints) {
        try {
          console.log(`Trying health check at: ${endpoint.url}`);
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 second timeout
          
          const response = await fetch(endpoint.url, {
            method: endpoint.method,
            headers: { 
              'Content-Type': 'application/json'
            },
            cache: 'no-store',
            mode: 'cors',
            credentials: 'include', // For cross-domain cookies
            signal: controller.signal
          });
          
          clearTimeout(timeoutId);
          
          if (response.ok) {
            console.log(`Health check successful via ${endpoint.url}`);
            // Store the successful URL for future use
            if (typeof localStorage !== 'undefined') {
              localStorage.setItem('last_successful_api_url', endpoint.url.replace('/health', '').replace('/api/health', ''));
            }
            return true;
          }
          console.warn(`Health check failed for ${endpoint.url} with status: ${response.status}`);
        } catch (error) {
          console.warn(`Health check failed for ${endpoint.url}:`, error);
        }
      }
      
      // If all attempts fail, try a direct ping to the domain without any path
      try {
        // Try multiple domain URLs
        const domainUrls = [
          baseUrl.split('/api')[0],
          'https://civitrack.onrender.com',
          'http://localhost:5000'
        ];
        
        for (const domainUrl of domainUrls) {
          console.log(`Trying direct domain ping at: ${domainUrl}`);
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
          
          const response = await fetch(domainUrl, {
            method: 'GET',
            mode: 'no-cors', // Use no-cors as a last resort
            cache: 'no-store',
            signal: controller.signal
          });
          
          clearTimeout(timeoutId);
          
          // With no-cors, we can't check response.ok, but if we get here without an error, the domain is reachable
          console.log(`Domain ping completed with status: ${response.type}`);
          return true;
        }
      } catch (error) {
        console.warn('All domain pings failed:', error);
      }
      
      // If all attempts fail, throw an error
      throw new Error('All health check attempts failed');
    } catch (error) {
      console.error('Backend health check failed:', error);
      return false;
    }
  },
  
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      console.log('Attempting login with credentials:', { email: credentials.email, passwordLength: credentials.password.length });
      
      // Check if we're online before attempting login
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        const offlineError = new Error('You are currently offline. Please check your internet connection and try again.');
        (offlineError as any).errorCode = 'OFFLINE_ERROR';
        (offlineError as any).isNetworkError = true;
        throw offlineError;
      }
      
      // Use mock service if enabled
      if (USE_MOCK_SERVICE) {
        console.log('Using mock service for login');
        const mockResponse = await mockService.login(credentials.email, credentials.password);
        const { token, user } = mockResponse;
        
        if (!token) {
          console.warn('No token received in mock login response');
          throw new Error('Authentication failed');
        }
        
        localStorage.setItem('token', token);
        console.log('Mock token stored in localStorage');
        
        // Dispatch a storage event to notify other components about the token change
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new StorageEvent('storage', {
            key: 'token',
            newValue: token,
            oldValue: null,
            storageArea: localStorage
          }));
        }
        
        return { user, token };
      }
      
      // Verify backend availability before attempting login
      try {
        // Use the explicit health check endpoint with the base URL
        await authService.checkBackendHealth();
      } catch (healthError: any) {
        // If health check fails, throw a clear network error
        console.warn('Backend health check failed before login attempt:', healthError);
        const serverError = new Error('Unable to reach the server. Please try again later.');
        (serverError as any).errorCode = 'SERVER_UNAVAILABLE';
        (serverError as any).isNetworkError = true;
        throw serverError;
      }
      
      // Use real API
      const response = await api.post<AuthResponse>('/auth/login', credentials);
      
      // Log successful login response
      console.log('Login successful, response:', response.data);
      
      // Store token in localStorage
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        console.log('Token stored in localStorage');
        
        // Store remember me preference if enabled
        if (credentials.rememberMe) {
          localStorage.setItem('rememberMe', 'true');
          console.log('Remember me preference stored');
        } else {
          localStorage.removeItem('rememberMe');
        }
        
        // Set flag to indicate successful connection to backend
        localStorage.setItem('use_local_backend', 'false');
        
        // Dispatch a storage event to notify other components about the token change
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new StorageEvent('storage', {
            key: 'token',
            newValue: response.data.token,
            oldValue: null,
            storageArea: localStorage
          }));
        }
      } else {
        console.warn('No token received in login response');
      }
      
      return response.data;
    } catch (error: any) {
      // New: Respect standardized error shape coming from axios interceptor
      const statusFromInterceptor = typeof error?.statusCode === 'number' ? error.statusCode : (typeof error?.status === 'number' ? error.status : undefined);
      const errorCode = error?.errorCode as string | undefined;
      const isNetwork = error?.isNetworkError === true || errorCode === 'NETWORK_ERROR' || errorCode === 'OFFLINE_ERROR';
      const isTimeout = errorCode === 'TIMEOUT_ERROR' || error?.code === 'ECONNABORTED' || (typeof error?.message === 'string' && error.message.toLowerCase().includes('timeout'));

      // Handle known HTTP statuses FIRST (even if error.response is missing)
      if (statusFromInterceptor === 403) {
        const unverifiedErr = new Error(error?.message || 'Your email is not verified. Please check your inbox or request a new verification email.');
        (unverifiedErr as any).status = 403;
        (unverifiedErr as any).statusCode = 403;
        // Preserve flag/code from interceptor if present, or infer from message
        const inferredUnverified = typeof unverifiedErr.message === 'string' && /not verified|verify/i.test(unverifiedErr.message);
        (unverifiedErr as any).isUnverifiedEmail = error?.isUnverifiedEmail === true || inferredUnverified;
        if (error?.errorCode === 'EMAIL_NOT_VERIFIED' || (unverifiedErr as any).isUnverifiedEmail) {
          (unverifiedErr as any).errorCode = 'EMAIL_NOT_VERIFIED';
        }
        throw unverifiedErr;
      }
      if (statusFromInterceptor === 401) {
        const authErr = new Error(error?.message || 'Invalid email or password');
        (authErr as any).status = 401;
        (authErr as any).statusCode = 401;
        throw authErr;
      }
      if (statusFromInterceptor === 429) {
        const rateLimitError = new Error(error?.message || 'Too many login attempts. Please try again later.');
        (rateLimitError as any).status = 429;
        (rateLimitError as any).statusCode = 429;
        (rateLimitError as any).retryAfter = (error && (error.retryAfter || error['retry-after'])) || 60;
        throw rateLimitError;
      }

      // Preserve explicit pre-identified server/connection issues
      if (errorCode === 'SERVER_UNAVAILABLE' || errorCode === 'OFFLINE_ERROR') {
        throw error;
      }

      if (isTimeout) {
        console.warn('Login API timeout error:', error?.message);
        const timeoutError = new Error('Connection timed out. The server is taking too long to respond.');
        (timeoutError as any).errorCode = 'TIMEOUT_ERROR';
        (timeoutError as any).isNetworkError = true;
        throw timeoutError;
      }

      // Only treat as network error if explicitly flagged, not just because response is missing
      if (isNetwork) {
        console.warn('Login API network error:', error?.message);
        const networkError = new Error(error?.message || 'Unable to connect to the server. Please try again later.');
        (networkError as any).errorCode = 'NETWORK_ERROR';
        (networkError as any).isNetworkError = true;
        throw networkError;
      }

      // Fallback to original axios error handling if available
      if (error?.response?.status === 401) {
        console.error('Login API authentication error:', error.response?.data?.message || 'Invalid credentials');
        const authError = new Error(error.response?.data?.message || 'Invalid email or password');
        (authError as any).status = 401;
        (authError as any).statusCode = 401;
        throw authError;
      }
      if (error?.response?.status === 429) {
        console.error('Login API rate limit error:', error.response?.data?.message || 'Too many requests');
        const rateLimitError = new Error('Too many login attempts. Please try again later.');
        (rateLimitError as any).status = 429;
        (rateLimitError as any).statusCode = 429;
        (rateLimitError as any).retryAfter = error.response?.headers?.['retry-after'] || 60;
        throw rateLimitError;
      }

      console.error('Login API error:', error?.response?.data || error?.message || error);
      throw error;
    }
  },

  register: async (userData: RegisterData): Promise<AuthResponse> => {
    try {
      // Check if we're online before attempting registration
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        const offlineError = new Error('You are currently offline. Please check your internet connection and try again.');
        (offlineError as any).errorCode = 'OFFLINE_ERROR';
        (offlineError as any).isNetworkError = true;
        throw offlineError;
      }
      
      // Use mock service if enabled
      if (USE_MOCK_SERVICE) {
        console.log('Using mock service for registration');
        const mockResponse = await mockService.register(userData.username, userData.email, userData.password);
        const { token, user } = mockResponse;
        
        // Don't store token in localStorage to prevent automatic login
        // User needs to verify email first
        return { user, token };
      }
      
      const response = await api.post<AuthResponse>('/auth/register', userData);
      // Don't store token in localStorage to prevent automatic login
      // User needs to verify email first
      
      // Display email verification message if user is not verified
      if (response.data.user && response.data.user.isEmailVerified === false) {
        console.log('User registered successfully. Email verification required.');
      }
      
      return response.data;
    } catch (error: any) {
      // Enhanced error logging with specific handling for timeout errors
      if (error.code === 'ECONNABORTED' || (error.message && error.message.includes('timeout'))) {
        console.error('Register API timeout error:', error.message);
        // Throw a more user-friendly error for network issues
        const networkError = new Error('Network connection issue. Please check your internet connection and try again.');
        (networkError as any).errorCode = 'NETWORK_ERROR';
        throw networkError;
      } else if (!error.response) {
        console.error('Register API network error:', error.message);
        const networkError = new Error('Unable to connect to the server. Please try again later.');
        (networkError as any).errorCode = 'NETWORK_ERROR';
        throw networkError;
      } else {
        console.error('Register API error:', error.response?.data || error.message);
        throw error;
      }
    }
  },

  verifyEmail: async (token: string): Promise<{ message: string }> => {
    try {
      const response = await api.post<{ message: string }>('/auth/verify-email', { token });
      return response.data;
    } catch (error: any) {
      console.error('Email verification error:', error.response?.data || error.message);
      throw error;
    }
  },

  resendVerificationEmail: async (email: string): Promise<{ message: string }> => {
    try {
      const response = await api.post<{ message: string }>(
        '/auth/resend-verification',
        { email }
      );
      return response.data;
    } catch (error: any) {
      // If endpoint validation or 404 occurs, try alias routes as fallback
      const isNotFound = (error?.statusCode === 404) || (typeof error?.message === 'string' && error.message.includes('Invalid API endpoint'));
      if (isNotFound) {
        const aliases = [
          '/auth/resend-verify',
          '/auth/resend-verification-email',
          '/auth/send-verification-email',
          '/auth/verify-email/resend'
        ];
        for (const alias of aliases) {
          try {
            const alt = await api.post<{ message: string }>(alias, { email });
            return alt.data;
          } catch (e) {
            // continue trying next alias
          }
        }
      }
      console.error('Resend verification email error:', error?.response?.data || error?.message);
      throw error;
    }
  },

  requestPasswordReset: async (email: string): Promise<{ message: string }> => {
    try {
      const response = await api.post<{ message: string }>('/auth/request-password-reset', { email });
      return response.data;
    } catch (error: any) {
      console.error('Password reset request error:', error.response?.data || error.message);
      throw error;
    }
  },

  resetPassword: async (token: string, password: string): Promise<{ message: string }> => {
    try {
      const response = await api.post<{ message: string }>('/auth/reset-password', { token, password });
      return response.data;
    } catch (error: any) {
      console.error('Password reset error:', error.response?.data || error.message);
      throw error;
    }
  },

  logout: (): void => {
    // Get the current token before removing it
    const currentToken = localStorage.getItem('token');
    
    // Remove token from localStorage
    console.log('Logging out user, removing token');
    localStorage.removeItem('token');
    console.log('Token removed from localStorage');
    
    // Dispatch a storage event to notify other components about the token change
    if (typeof window !== 'undefined') {
      // Create and dispatch a storage event to notify other components
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'token',
        newValue: null,
        oldValue: currentToken, // Use the actual previous token value
        storageArea: localStorage
      }));
    }
    
    // Clear any other auth-related data from localStorage if needed
    // localStorage.removeItem('user');
    
    // Optionally, you could make a logout API call here if the backend needs to invalidate the token
    // try {
    //   await api.post('/auth/logout');
    // } catch (error) {
    //   console.error('Logout API error:', error);
    // }
  },

  getCurrentUser: async (): Promise<User | null> => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('No token found, user is not authenticated');
        return null;
      }

      console.log('Token found, fetching current user');
      
      // Use mock service if enabled
      if (USE_MOCK_SERVICE) {
        console.log('Using mock service for getCurrentUser');
        const mockUser = await mockService.getCurrentUser();
        console.log('Mock user data received:', mockUser);
        return mockUser;
      }
      
      // Check if backend is reachable
      try {
        // Use the health check function
        await authService.checkBackendHealth();
      } catch (healthError) {
        console.warn('Backend health check failed before user fetch attempt', healthError);
      }
      
      // Try both endpoints to ensure compatibility
      try {
        // Use real API with correct endpoint (baseURL already includes /api)
        const response = await api.get<User>('/auth/me');
        console.log('Current user data received:', response.data);
        return response.data;
      } catch (firstError) {
        // If request fails due to auth, propagate handling below
        throw firstError;
      }
    } catch (error: any) {
      // Check for offline status first
      if (!navigator.onLine) {
        console.error('Get current user API offline error: Browser is offline');
        const offlineError = new Error('You are currently offline. Please check your internet connection and try again.');
        offlineError.errorCode = 'OFFLINE_ERROR';
        throw offlineError;
      }
      
      // Enhanced error logging with specific handling for timeout errors
      if (error.code === 'ECONNABORTED' || (error.message && error.message.includes('timeout'))) {
        console.error('Get current user API timeout error:', error.message);
        // Throw a more user-friendly error for network issues
        const timeoutError = new Error('Request timed out. The server is taking too long to respond. Please try again later.');
        timeoutError.errorCode = 'TIMEOUT_ERROR';
        throw timeoutError;
      } else if (!error.response || error.message?.includes('Network Error')) {
        console.error('Get current user API network error:', error.message);
        const networkError = new Error('Network connection issue. Please check your internet connection and try again.');
        networkError.errorCode = 'NETWORK_ERROR';
        throw networkError;
      } else if (error.response?.status === 401 || error.response?.status === 403) {
        // For 401/403 errors, clear the token
        console.error('Get current user API unauthorized error');
        localStorage.removeItem('token');
        return null;
      } else if (error.response?.status >= 500) {
        console.error('Get current user API server error:', error.response.status);
        const serverError = new Error('Server is currently unavailable. Please try again later.');
        serverError.errorCode = 'SERVER_ERROR';
        throw serverError;
      } else {
        console.error('Get current user API error:', error.response?.data || error.message);
        throw error;
      }
    }
  },

  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('token');
    const isAuth = token !== null;
    console.log('Authentication check:', isAuth ? 'User is authenticated' : 'User is not authenticated');
    return isAuth;
  }
};

export default authService;