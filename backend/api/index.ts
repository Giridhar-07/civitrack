// Export the Express app for Vercel serverless function
// Import the compiled server from dist to ensure compatibility with Vercel's build process
import app from '../dist/server';

export default app;