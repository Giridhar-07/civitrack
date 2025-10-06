// Unit test to ensure DELETE requests add cache-control headers
// Mocks the retryable axios instance to capture config passed to delete

jest.mock('../../utils/apiRetry', () => {
  const deleteMock = jest.fn((url: string, config?: any) => {
    // Simulate AxiosResponse shape minimally
    return Promise.resolve({
      data: { success: true, data: null },
      config: { url, method: 'delete', ...config }
    });
  });

  const instance = {
    delete: deleteMock,
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    interceptors: { request: { use: jest.fn() }, response: { use: jest.fn() } }
  };

  return {
    createRetryableAxiosInstance: () => instance,
    __deleteMock: deleteMock
  };
});

import api from '../api';

describe('api.delete cache-control headers', () => {
  it('adds cache-control headers to DELETE requests', async () => {
    const apiRetry = require('../../utils/apiRetry');
    const deleteMock = apiRetry.__deleteMock as jest.Mock;

    await api.delete('/issues/123');

    expect(deleteMock).toHaveBeenCalled();
    const call = deleteMock.mock.calls[0];
    const cfg = call[1] || {};
    const headers = cfg.headers || {};

    expect(headers['Cache-Control']).toContain('no-cache');
    expect(headers['Pragma']).toBe('no-cache');
    expect(headers['Expires']).toBe('0');
    expect(headers['X-Requested-With']).toMatch(/^XMLHttpRequest-/);
  });
});