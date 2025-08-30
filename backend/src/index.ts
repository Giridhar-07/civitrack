import { startServer } from './server';
import app from './server';

// Start the server in non-serverless environments
if (!process.env.VERCEL && !process.env.AWS_LAMBDA_FUNCTION_NAME) {
  startServer().catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
}

// Export for serverless environments
export default app;