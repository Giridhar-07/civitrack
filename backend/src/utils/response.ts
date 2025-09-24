import { Response } from 'express';

// Standard response format
interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string | string[];
  errorCode?: string;
  fieldErrors?: Record<string, string[] | string>;
}

// Success response
export const successResponse = <T>(
  res: Response,
  data: T,
  message: string = 'Success',
  statusCode: number = 200
): Response => {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  return res.status(statusCode).json(response);
};

// Error response
export const errorResponse = (
  res: Response,
  message: string = 'An error occurred',
  statusCode: number = 500,
  errors?: string | string[],
  errorCode?: string,
  fieldErrors?: Record<string, string[] | string>
): Response => {
  const response: ApiResponse<null> = {
    success: false,
    message,
    error: errors,
    errorCode,
    fieldErrors,
  };
  return res.status(statusCode).json(response);
};

// Not found response
export const notFoundResponse = (res: Response, message: string = 'Resource not found'): Response => {
  return errorResponse(res, message, 404);
};

// Bad request response
export const badRequestResponse = (
  res: Response,
  message: string = 'Bad request',
  errorsOrFieldErrors?: string | string[] | Record<string, string[] | string>,
  errorCode?: string
): Response => {
  if (errorsOrFieldErrors && typeof errorsOrFieldErrors === 'object' && !Array.isArray(errorsOrFieldErrors)) {
    return errorResponse(res, message, 400, undefined, errorCode, errorsOrFieldErrors);
  }
  return errorResponse(res, message, 400, errorsOrFieldErrors as string | string[] | undefined, errorCode);
};

// Unauthorized response
export const unauthorizedResponse = (res: Response, message: string = 'Unauthorized'): Response => {
  return errorResponse(res, message, 401);
};

// Forbidden response
export const forbiddenResponse = (res: Response, message: string = 'Forbidden'): Response => {
  return errorResponse(res, message, 403);
};