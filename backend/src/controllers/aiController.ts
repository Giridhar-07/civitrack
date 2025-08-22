import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import geminiService, { ChatMessage } from '../services/geminiService';
import { successResponse, badRequestResponse, errorResponse } from '../utils/response';

export const chat = async (req: Request, res: Response): Promise<Response> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return badRequestResponse(res, 'Validation error', errors.array().map(e => e.msg));
    }

    const { message, history } = req.body as { message: string; history?: ChatMessage[] };

    const reply = await geminiService.generateResponse(message, history || []);

    return successResponse(res, { message: reply.message, timestamp: reply.timestamp }, 'AI response generated');
  } catch (err) {
    console.error('AI chat error:', err);
    return errorResponse(res, 'Failed to generate AI response', 500);
  }
};

export const quickHelp = async (req: Request, res: Response): Promise<Response> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return badRequestResponse(res, 'Validation error', errors.array().map(e => e.msg));
    }

    const topic = (req.query.topic as string) || '';
    const reply = await geminiService.getQuickHelp(topic);

    return successResponse(res, { message: reply.message, timestamp: reply.timestamp }, 'AI quick help');
  } catch (err) {
    console.error('AI quickHelp error:', err);
    return errorResponse(res, 'Failed to fetch AI quick help', 500);
  }
};

export const validateService = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const ok = await geminiService.validateService();
    return successResponse(res, { ok }, ok ? 'AI service available' : 'AI service unavailable');
  } catch (err) {
    console.error('AI validateService error:', err);
    return errorResponse(res, 'AI service validation failed', 500);
  }
};