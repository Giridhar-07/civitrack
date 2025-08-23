import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import crypto from 'crypto';

// JWT configuration from environment variables with secure defaults
const JWT_SECRET = process.env.JWT_SECRET || (process.env.NODE_ENV === 'production' 
  ? crypto.randomBytes(64).toString('hex') // Generate a secure random key in production
  : 'dev_jwt_secret_key_for_development_only');

const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '12h';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

// Interface for JWT payload with enhanced security
interface JwtPayload {
  id: string;
  role: string;
  iat?: number; // Issued at
  exp?: number; // Expiration time
  jti?: string; // JWT ID for token identification
}

// Generate JWT token for a user with enhanced security
export const generateToken = (user: User): string => {
  const payload: JwtPayload = {
    id: user.id,
    role: user.role,
    jti: crypto.randomBytes(16).toString('hex'), // Add unique token ID
  };

  const signOptions: SignOptions = {
    expiresIn: JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'],
    algorithm: 'HS256' as jwt.Algorithm, // Explicitly set algorithm
    audience: process.env.JWT_AUDIENCE || 'civitrack-api',
    issuer: process.env.JWT_ISSUER || 'civitrack-auth',
  };
  
  return jwt.sign(payload, JWT_SECRET as jwt.Secret, signOptions);
};

// Verify JWT token with enhanced security checks
export const verifyToken = (token: string): JwtPayload => {
  try {
    const verifyOptions: jwt.VerifyOptions = {
      algorithms: ['HS256' as jwt.Algorithm],
      audience: process.env.JWT_AUDIENCE || 'civitrack-api',
      issuer: process.env.JWT_ISSUER || 'civitrack-auth',
      maxAge: JWT_EXPIRES_IN as string // Verify token age
    };
    
    const decoded = jwt.verify(token, JWT_SECRET, verifyOptions);
    return decoded as JwtPayload;
  } catch (error: any) {
    // Enhanced error handling with specific error messages
    if (error.name === 'TokenExpiredError') {
      throw new Error('Token expired');
    } else if (error.name === 'JsonWebTokenError') {
      throw new Error('Invalid token');
    } else {
      throw new Error('Authentication failed');
    }
  }
};

// Express middleware to authenticate requests with enhanced security
export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Check for token in Authorization header or secure cookie
    let token: string | undefined;
    
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }
    
    // If no token in header, check secure cookie (if using cookies)
    if (!token && req.cookies && req.cookies.accessToken) {
      token = req.cookies.accessToken;
    }
    
    if (!token) {
      res.status(401).json({ 
        success: false,
        message: 'Authentication required',
        error: 'No authentication token provided'
      });
      return;
    }

    // Verify token with enhanced security checks
    const decoded = verifyToken(token);

    // Find user by id with security checks
    const user = await User.findByPk(decoded.id);
    if (!user) {
      res.status(401).json({ 
        success: false,
        message: 'Authentication failed',
        error: 'User not found'
      });
      return;
    }
    
    // Security check: Verify user is active and not locked
    if (user.isLocked) {
      res.status(403).json({ 
        success: false,
        message: 'Account locked',
        error: 'Your account has been locked. Please contact support.'
      });
      return;
    }

    // Add user to request object
    (req as any).user = user;
    
    // Add token data for potential refresh
    (req as any).token = {
      jti: decoded.jti,
      exp: decoded.exp
    };
    
    next();
  } catch (error: any) {
    // Enhanced error handling with specific error messages
    const errorMessage = error.message || 'Invalid authentication token';
    
    res.status(401).json({ 
      success: false,
      message: 'Authentication failed',
      error: errorMessage
    });
  }
};

// Express middleware to authorize admin access
export const authorizeAdmin = (req: Request, res: Response, next: NextFunction): void => {
  const user = (req as any).user as User;
  
  if (!user || user.role !== 'admin') {
    res.status(403).json({ message: 'Access denied: Admin privileges required' });
    return;
  }
  
  next();
};