import app from './server';
import { startServer } from './server';

// Start the server only if not in a serverless environment
if (!process.env.VERCEL && !process.env.AWS_LAMBDA_FUNCTION_NAME && !process.env.RENDER) {
  startServer();
}

// Export for serverless environments
export default app;