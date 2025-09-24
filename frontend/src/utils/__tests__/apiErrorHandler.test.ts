import { extractErrorMessage, formatFieldErrors } from '../apiErrorHandler';
import { isNetworkError } from '../networkUtils';

// Mock networkUtils to control network conditions
jest.mock('../networkUtils', () => ({
  isNetworkError: jest.fn(),
}));

// Helper to build Axios-like error objects
const makeAxiosError = (overrides: Partial<any> = {}) => ({
  isAxiosError: true,
  message: 'Request failed',
  config: { url: '/api/test' },
  response: undefined,
  code: undefined,
  ...overrides,
});

// Reset mocks before each test
beforeEach(() => {
  jest.resetAllMocks();
});

describe('extractErrorMessage', () => {
  it('returns default message for falsy error', () => {
    const res = extractErrorMessage(undefined as any);
    expect(res.message).toMatch(/unexpected/i);
  });

  it('handles string error', () => {
    const res = extractErrorMessage('Simple error');
    expect(res.message).toBe('Simple error');
  });

  it('handles standard Error object', () => {
    const err = new Error('Boom');
    const res = extractErrorMessage(err);
    expect(res.message).toBe('Boom');
  });

  it('handles Axios error with string response body', () => {
    const err = makeAxiosError({ response: { status: 400, data: 'Bad things happened' } });
    const res = extractErrorMessage(err);
    expect(res.message).toBe('Bad things happened');
    expect(res.statusCode).toBe(400);
  });

  it('flags unverified email on 403 with verify message (string body)', () => {
    const err = makeAxiosError({ response: { status: 403, data: 'Email not verified. Please verify.' } });
    const res = extractErrorMessage(err);
    expect(res.isUnverifiedEmail).toBe(true);
    expect(res.errorCode).toBe('EMAIL_NOT_VERIFIED');
  });

  it('handles structured response with message and code', () => {
    const err = makeAxiosError({ response: { status: 409, data: { message: 'Duplicate', code: 'DUPLICATE' } } });
    const res = extractErrorMessage(err);
    expect(res.message).toBe('Duplicate');
    expect(res.errorCode).toBe('DUPLICATE');
    expect(res.statusCode).toBe(409);
  });

  it('normalizes fieldErrors arrays and strings', () => {
    const err = makeAxiosError({ response: { status: 422, data: { message: 'Validation', fieldErrors: { name: ['Required', 'Too short'], email: 'Invalid' } } } });
    const res = extractErrorMessage(err);
    expect(res.fieldErrors).toEqual({ name: ['Required', 'Too short'], email: 'Invalid' });
  });

  it('returns offline error when navigator.onLine is false', () => {
    const spy = jest.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(false);
    const err = makeAxiosError({ response: undefined });
    (isNetworkError as jest.Mock).mockReturnValue(true);
    const res = extractErrorMessage(err);
    expect(res.errorCode).toBe('OFFLINE_ERROR');
    expect(res.message).toMatch(/offline/i);
    spy.mockRestore();
  });

  it('detects timeout network error (ECONNABORTED)', () => {
    (isNetworkError as jest.Mock).mockReturnValue(true);
    const err = makeAxiosError({ code: 'ECONNABORTED' });
    const res = extractErrorMessage(err);
    expect(res.errorCode).toBe('TIMEOUT_ERROR');
    expect(res.message).toMatch(/timed out/i);
  });

  it('maps generic network error by message', () => {
    (isNetworkError as jest.Mock).mockReturnValue(true);
    const err = makeAxiosError({ message: 'Network Error' });
    const res = extractErrorMessage(err);
    expect(res.errorCode).toBe('NETWORK_ERROR');
  });

  it('falls back to NETWORK_ERROR when no response is present', () => {
    (isNetworkError as jest.Mock).mockReturnValue(false);
    const err = makeAxiosError({ response: undefined });
    const res = extractErrorMessage(err);
    expect(res.errorCode).toBe('NETWORK_ERROR');
  });

  it('handles 401 for login route with friendly message', () => {
    const err = makeAxiosError({ response: { status: 401, data: {} }, config: { url: '/auth/login' } });
    const res = extractErrorMessage(err);
    expect(res.message).toMatch(/invalid email or password/i);
  });

  it('handles 403 with structured body and unverified flag', () => {
    const err = makeAxiosError({ response: { status: 403, data: { message: 'User not verified yet' } } });
    const res = extractErrorMessage(err);
    expect(res.isUnverifiedEmail).toBe(true);
    expect(res.errorCode).toBe('EMAIL_NOT_VERIFIED');
  });

  it('handles 404', () => {
    const err = makeAxiosError({ response: { status: 404, data: {} } });
    const res = extractErrorMessage(err);
    expect(res.statusCode).toBe(404);
    expect(res.message).toMatch(/not found/i);
  });

  it('handles 422 validation format fallback', () => {
    const err = makeAxiosError({ response: { status: 422, data: { errors: { username: ['Too short'] } } } });
    const res = extractErrorMessage(err);
    expect(res.fieldErrors).toEqual({ username: ['Too short'] });
  });

  it('handles 500+', () => {
    const err = makeAxiosError({ response: { status: 500, data: {} } });
    const res = extractErrorMessage(err);
    expect(res.message).toMatch(/server error/i);
    expect(res.statusCode).toBe(500);
  });
});

describe('formatFieldErrors', () => {
  it('picks first error from arrays and keeps strings', () => {
    const formatted = formatFieldErrors({ name: ['Required', 'Too short'], email: 'Invalid', age: 3 as any });
    expect(formatted).toEqual({ name: 'Required', email: 'Invalid', age: 'Invalid input' });
  });
});