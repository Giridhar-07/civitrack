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
    const t0 = Date.now();

    // AI health with short timeout to avoid blocking
    const aiStart = Date.now();
    const aiTimeoutMs = 2000;
    const aiHealthy = await Promise.race<boolean>([
      geminiService.validateService().catch(() => false),
      new Promise<boolean>(resolve => setTimeout(() => resolve(false), aiTimeoutMs))
    ]);
    const ai = {
      ok: aiHealthy,
      model: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
      error: aiHealthy ? undefined : `AI service degraded or timeout after ${aiTimeoutMs}ms`,
      durationMs: Date.now() - aiStart
    };

    // Email health (non-blocking verify inside util)
    const emailStart = Date.now();
    const email = await checkEmailHealth();
    (email as any).durationMs = Date.now() - emailStart;

    // Storage health (ImageKit config + local uploads directory existence)
    const imagekitConfigured = Boolean(
      process.env.IMAGEKIT_URL_ENDPOINT &&
      process.env.IMAGEKIT_PUBLIC_KEY &&
      process.env.IMAGEKIT_PRIVATE_KEY
    );
    const storageStart = Date.now();
    const uploadsDirPath = path.join(__dirname, '../uploads');
    const uploadsDirExists = fs.existsSync(uploadsDirPath);
    const storage = {
      ok: imagekitConfigured || uploadsDirExists,
      imagekitConfigured,
      uploadsStaticServing: uploadsDirExists,
      error: imagekitConfigured || uploadsDirExists ? undefined : 'No storage configured: ImageKit not set and uploads directory missing',
      durationMs: Date.now() - storageStart
    };

    // Overall status focuses on core app functions (auth + storage)
    const ok = email.ok && storage.ok;

    const result: any = {
      ok,
      services: {
        ai,
        email,
        storage,
      },
      latencyMs: {
        ai: ai.durationMs,
        email: (email as any).durationMs,
        storage: storage.durationMs,
        total: Date.now() - t0,
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