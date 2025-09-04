import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import http from 'http';
import { URL } from 'url';
import routes from './routes';
import sequelize from './config/database';
import { syncModels } from './models';
import { errorResponse } from './utils/response';
import { initializeSocketIO } from './services/socketService';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Trust proxy in production/serverless environments (Vercel, AWS Lambda)
if (process.env.NODE_ENV === 'production' || process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
  app.set('trust proxy', 1);
  console.log('Express trust proxy enabled for serverless environment');
}

// Set up security middleware
// Enhanced Helmet configuration for security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "blob:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  referrerPolicy: { policy: 'same-origin' },
}));

// Rate limiting middleware for API routes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // Increased from 100 to 300 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skipSuccessfulRequests: true // Only count failed requests
});

// Apply rate limiting to all requests
app.use(apiLimiter);

// Stricter rate limiting for authentication routes
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 30, // Increased from 10 to 30 attempts per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many login/register attempts from this IP, please try again after an hour',
  skipSuccessfulRequests: true // Don't count successful requests against the limit
});

// Apply stricter rate limiting to auth routes
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);

// Enhanced CORS configuration
// const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:3000').split(',');
// app.use(cors({
//   origin: (origin, callback) => {
//     // Allow requests with no origin (like mobile apps or curl requests)
//     if (!origin) return callback(null, true);
//     
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
// }));
const defaultAllowed = ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:5174', 'http://127.0.0.1:5174'];
const envAllowed = (process.env.CORS_ORIGIN || '').split(',').map(o => o.trim()).filter(Boolean);
const allowedOrigins = Array.from(new Set([...defaultAllowed, ...envAllowed]));

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    try {
      const url = new URL(origin);
      const hostname = url.hostname;
      const isExplicitlyAllowed = allowedOrigins.includes(origin);
      const isNetlifyAllowed = process.env.NODE_ENV === 'production' && hostname.endsWith('.netlify.app');

      if (isExplicitlyAllowed || isNetlifyAllowed) {
        return callback(null, true);
      }
    } catch (e) {
      // If origin is malformed, reject
    }

    const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
    return callback(new Error(msg), false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Add cookie parser for secure cookies
app.use(cookieParser());

// Add compression for better performance
app.use(compression());

// Add performance monitoring middleware
import { performanceMonitor } from './utils/performanceMonitor';
app.use(performanceMonitor);

// JSON body parser with size limits
app.use(express.json({ limit: '1mb' })); // Limit JSON body size
app.use(express.urlencoded({ extended: true, limit: '1mb' })); // Limit URL-encoded body size

// Custom middleware to log static file requests
app.use('/uploads', (req, res, next) => {
  console.log(`Static file request: ${req.method} ${req.originalUrl}`);
  next();
});

// Serve static files from uploads directory
import { uploadsDir } from './utils/upload';
app.use('/uploads', express.static(uploadsDir));

// API routes
app.use('/api', routes);

// Root health check route for Vercel deployments
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'CiviTrack API is running',
    environment: process.env.NODE_ENV,
    serverless: Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME)
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint not found',
    error: 'Not Found'
  });
});

// Enhanced error handler with better logging and response
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', err);
  
  // Check if headers have already been sent
  if (res.headersSent) {
    return next(err);
  }
  
  // Handle specific error types
  if (err.name === 'UnauthorizedError') {
    return errorResponse(res, 'Invalid or expired authentication token', 401);
  }
  
  if (err.message && err.message.includes('CORS')) {
    return errorResponse(res, 'CORS policy violation', 403);
  }
  
  // Default error response
  return errorResponse(res, 'Internal server error', 500);
});

// Create HTTP server
const server = http.createServer(app);

// Socket.IO initialization disabled to resolve connection issues
// initializeSocketIO(server);

// Start server
const PORT = process.env.PORT || 5000; // Changed port to avoid conflicts

// Connect to database and start server
export const startServer = async () => {
  try {
    // Test database connection with retry mechanism
    let retries = 5;
    while (retries > 0) {
      try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        break;
      } catch (dbError) {
        retries--;
        if (retries === 0) {
          throw dbError;
        }
        console.log(`Database connection failed, retrying... (${retries} attempts left)`);
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    }
    
    // Only start the server if not in Vercel serverless environment
    if (process.env.NODE_ENV !== 'production') {
      server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`WebSocket server initialized`);
        console.log(`Performance monitoring enabled`);
      });
    } else {
      console.log('Running in serverless mode');
    }
  } catch (error) {
    console.error('Unable to connect to the database or start server:', error);
    if (process.env.NODE_ENV !== 'production') {
      // Don't exit immediately, allow for graceful shutdown
      console.log('Server will attempt to restart automatically');
      setTimeout(() => process.exit(1), 1000);
    }
  }
};



export default app;