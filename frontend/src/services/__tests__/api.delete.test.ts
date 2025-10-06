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
  it('appends cache-busting query param to DELETE url', async () => {
    const apiRetry = require('../../utils/apiRetry');
    const deleteMock = apiRetry.__deleteMock as jest.Mock;

    await api.delete('/issues/123');

    expect(deleteMock).toHaveBeenCalled();
    const call = deleteMock.mock.calls[0];
    const url = call[0] as string;
    expect(url).toMatch(/\?_=[0-9]+$/);
  });
});