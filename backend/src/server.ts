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
import { errorResponse, badRequestResponse } from './utils/response';
import { initializeSocketIO } from './services/socketService';
import { checkEmailHealth } from './utils/email';
import { MulterError } from 'multer';

// Load environment variables

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
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "blob:", "http://localhost:5000", "https://civitrack.onrender.com"],
      connectSrc: [
        "'self'",
        "https://civitrack-dev.netlify.app",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3001",
        "http://127.0.0.1:3001"
      ],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  // Enable cross-origin resource loading for images and other static assets
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  // Disable COEP to avoid blocking cross-origin resources inadvertently
  crossOriginEmbedderPolicy: false,
  xssFilter: true,
  noSniff: true,
  referrerPolicy: { policy: 'same-origin' },
}));

// Rate limiting middleware for API routes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 600, // Increased from 300 to 600 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skipSuccessfulRequests: true, // Only count failed requests
  message: 'Too many requests, please try again later.'
});

// Apply rate limiting to all requests
app.use(apiLimiter);

// Stricter rate limiting for authentication routes
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 60, // Increased from 30 to 60 attempts per hour
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
const defaultAllowed = [
  'http://localhost:3000', 'http://127.0.0.1:3000',
  'http://localhost:5173', 'http://127.0.0.1:5173',
  'http://localhost:3001', 'http://127.0.0.1:3001',
  'https://civitrack-dev.netlify.app'
];
const envAllowed = (process.env.CORS_ORIGIN || '').split(',').map(o => o.trim()).filter(Boolean);
const allowedOrigins = Array.from(new Set([...defaultAllowed, ...envAllowed]));
const isDev = (process.env.NODE_ENV || 'development') !== 'production';

console.log('Allowed CORS origins:', allowedOrigins);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps or curl requests)
    if (isDev) return callback(null, true); // Allow all origins in development

    try {
      const url = new URL(origin);
      const hostname = url.hostname;
      const isExplicitlyAllowed = allowedOrigins.includes(origin);
      const isNetlifyAllowed = process.env.NODE_ENV === 'production' && hostname.endsWith('.netlify.app');
      const isLocalDev = process.env.NODE_ENV !== 'production' && (hostname === 'localhost' || hostname === '127.0.0.1');

      if (isExplicitlyAllowed || isNetlifyAllowed || isLocalDev) {
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
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Cache-Control', 'Pragma', 'x-no-retry', 'X-No-Retry']
}));

// Add cookie parser for secure cookies
app.use(cookieParser());

// Add compression for better performance
app.use(compression());

// Add performance monitoring middleware
import { performanceMonitor } from './utils/performanceMonitor';
app.use(performanceMonitor);

// JSON body parser with size limits
app.use(express.json({ 
  limit: '1mb',
  verify: (req: any, _res, buf, encoding) => {
    try {
      req.rawBody = buf?.toString(encoding as BufferEncoding || 'utf8');
    } catch {
      req.rawBody = undefined;
    }
  }
})); // Limit JSON body size
app.use(express.urlencoded({ extended: true, limit: '1mb' })); // Limit URL-encoded body size

// Handle JSON parse errors gracefully
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err && err.type === 'entity.parse.failed') {
    // Log raw body and headers for debugging malformed JSON
    try {
      console.error('JSON parse error:', {
        path: req.path,
        contentType: req.headers['content-type'],
        rawBody: (req as any).rawBody
      });
    } catch {}
    // For resend verification endpoints, always return generic success
    if (req.path.includes('/api/auth/resend-verification') ||
        req.path.includes('/api/auth/resend-verify') ||
        req.path.includes('/api/auth/resend-verification-email') ||
        req.path.includes('/api/auth/send-verification-email') ||
        req.path.includes('/api/auth/verify-email/resend')) {
      return res.status(200).json({ success: true, message: 'If your email exists and is not verified, you will receive a verification email', data: {} });
    }
    return res.status(400).json({ success: false, message: 'Invalid JSON payload', error: 'Bad Request' });
  }
  next(err);
});

// Custom middleware to log static file requests
app.use('/uploads', (req, res, next) => {
  console.log(`Static file request: ${req.method} ${req.originalUrl}`);
  next();
});

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// API routes
app.use('/api', routes);

// Root health check routes for all deployments
// Removed legacy simple /health route to use unified health handler
// Removed legacy simple /health route to use unified health handler
// Root route for Vercel deployments
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'CiviTrack API is running',
    environment: process.env.NODE_ENV,
    serverless: Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.RENDER)
  });
});

// Removed duplicate simple /health route to avoid shadowing unified health
// Removed duplicate simple /health route to avoid shadowing unified health

// Unified health check handler (DB + Email) mounted at /health and /api/health
const healthHandler = async (_req: Request, res: Response) => {
  const timestamp = new Date().toISOString();
  const version = process.env.npm_package_version || '1.0.0';
  const environment = process.env.NODE_ENV || 'development';

  // Database health
  let dbHealthy = false;
  let dbError: string | undefined;
  try {
    await sequelize.authenticate();
    dbHealthy = true;
  } catch (err: any) {
    dbHealthy = false;
    dbError = err?.message || 'Database connection failed';
  }

  // Email health
  const email = await checkEmailHealth().catch((e: any) => ({ ok: false, error: e?.message || 'Email check failed' }));
  const emailHealthy = Boolean((email as any)?.ok);
  const emailError = (email as any)?.error as string | undefined;

  const overallStatus = dbHealthy && emailHealthy ? 'ok' : (dbHealthy || emailHealthy ? 'degraded' : 'unhealthy');

  return res.status(overallStatus === 'ok' ? 200 : 503).json({
    status: overallStatus,
    timestamp,
    version,
    environment,
    checks: {
      database: { ok: dbHealthy, error: dbError },
      email: { ok: emailHealthy, error: emailError }
    }
  });
};

// Mount health routes
app.get('/health', healthHandler);
app.get('/api/health', healthHandler);

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

  // Ensure JSON parse errors never bubble as 500
  if ((err as any)?.type === 'entity.parse.failed') {
    // Mirror the earlier special-case behavior for resend verification endpoints
    if (req.path.includes('/api/auth/resend-verification') ||
        req.path.includes('/api/auth/resend-verify') ||
        req.path.includes('/api/auth/resend-verification-email') ||
        req.path.includes('/api/auth/send-verification-email') ||
        req.path.includes('/api/auth/verify-email/resend')) {
      return res.status(200).json({ success: true, message: 'If your email exists and is not verified, you will receive a verification email', data: {} });
    }
    return errorResponse(res, 'Invalid JSON payload', 400);
  }
  
  // Handle specific error types
  if (err.name === 'UnauthorizedError') {
    return errorResponse(res, 'Invalid or expired authentication token', 401);
  }
  
  if ((err as any).message && (err as any).message.includes('CORS')) {
    return errorResponse(res, 'CORS policy violation', 403);
  }

  // Handle Multer upload errors (e.g., file size limit)
  if ((err as any)?.name === 'MulterError' || err instanceof MulterError) {
    const mErr = err as MulterError;

    // Map known Multer error codes to friendly messages and error codes
    switch (mErr.code) {
      case 'LIMIT_FILE_SIZE': {
        const fieldErrors = { image: 'File size exceeds the 5MB limit' } as Record<string, string>;
        return badRequestResponse(res, 'File too large', fieldErrors, 'FILE_TOO_LARGE');
      }
      case 'LIMIT_FILE_COUNT': {
        const fieldErrors = { image: 'Too many files uploaded' } as Record<string, string>;
        return badRequestResponse(res, 'Too many files', fieldErrors, 'FILE_COUNT_LIMIT');
      }
      case 'LIMIT_PART_COUNT': {
        return badRequestResponse(res, 'Too many parts in the multipart request', undefined, 'PART_COUNT_LIMIT');
      }
      case 'LIMIT_FIELD_KEY': {
        return badRequestResponse(res, 'Field name too long', undefined, 'FIELD_KEY_LIMIT');
      }
      case 'LIMIT_FIELD_VALUE': {
        return badRequestResponse(res, 'Field value too long', undefined, 'FIELD_VALUE_LIMIT');
      }
      case 'LIMIT_FIELD_COUNT': {
        return badRequestResponse(res, 'Too many fields in the form', undefined, 'FIELD_COUNT_LIMIT');
      }
      case 'LIMIT_UNEXPECTED_FILE': {
        const fieldName = (mErr as any).field || 'image';
        const fieldErrors = { [fieldName]: 'Unexpected file field' } as Record<string, string>;
        return badRequestResponse(res, 'Unexpected file field', fieldErrors, 'UNEXPECTED_FILE');
      }
      default: {
        // Generic Multer error
        return badRequestResponse(res, 'File upload error', undefined, 'FILE_UPLOAD_ERROR');
      }
    }
  }
  
  // Default error response
  return errorResponse(res, 'Internal server error', 500);
});

// Create HTTP server
const server = http.createServer(app);

// Initialize Redis with fallback to no-cache mode
import { initRedis } from './services/redisService';
// Set Redis to disabled for local development
process.env.DISABLE_REDIS = 'true';
// Initialize Redis (will use no-cache mode due to DISABLE_REDIS)
initRedis();

// Initialize Socket.IO with Redis fallback
initializeSocketIO(server);

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
    
    // Always start the server in all environments
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`Render deployment: ${Boolean(process.env.RENDER)}`);
      console.log(`WebSocket server initialized`);
      console.log(`Performance monitoring enabled`);
    });
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