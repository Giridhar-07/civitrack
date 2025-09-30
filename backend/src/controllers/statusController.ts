import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { successResponse, errorResponse } from '../utils/response';
import { checkEmailHealth } from '../utils/email';
import geminiService from '../services/geminiService';

// Aggregate service health for AI, email, and storage
export const getStatus = async (req: Request, res: Response): Promise<Response> => {
  try {
    const verbose = String(req.query.verbose || '').toLowerCase() === 'true';

    // AI health
    const aiHealthy = await geminiService.validateService();
    const ai = {
      ok: aiHealthy,
      model: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
      error: aiHealthy ? undefined : 'AI service validation failed'
    };

    // Email health
    const email = await checkEmailHealth();

    // Storage health (ImageKit config + local uploads directory existence)
    const imagekitConfigured = Boolean(
      process.env.IMAGEKIT_URL_ENDPOINT &&
      process.env.IMAGEKIT_PUBLIC_KEY &&
      process.env.IMAGEKIT_PRIVATE_KEY
    );
    const uploadsDirPath = path.join(__dirname, '../uploads');
    const uploadsDirExists = fs.existsSync(uploadsDirPath);
    const storage = {
      ok: imagekitConfigured || uploadsDirExists,
      imagekitConfigured,
      uploadsStaticServing: uploadsDirExists,
      error: imagekitConfigured || uploadsDirExists ? undefined : 'No storage configured: ImageKit not set and uploads directory missing'
    };

    const ok = ai.ok && email.ok && storage.ok;

    const result: any = {
      ok,
      services: {
        ai,
        email,
        storage,
      },
    };

    if (verbose) {
      result.env = {
        nodeEnv: process.env.NODE_ENV || 'development',
        render: Boolean(process.env.RENDER),
        vercel: Boolean(process.env.VERCEL),
        awsLambda: Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME),
      };
    }

    return successResponse(res, result, 'Unified service status');
  } catch (err) {
    console.error('Error building unified status:', err);
    return errorResponse(res, 'Failed to retrieve status', 500);
  }
};