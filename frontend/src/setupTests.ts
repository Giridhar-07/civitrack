// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock axios ESM module so Jest (CommonJS) can import without syntax errors
// Provides a minimal axios.create() and instance callable with interceptors and HTTP methods
jest.mock('axios', () => {
  const makeClient = (config?: any) => {
    const client: any = jest.fn(() => Promise.reject(new Error('Axios instance call mocked')));
    client.defaults = { ...(config || {}) };
    client.interceptors = { request: { use: jest.fn() }, response: { use: jest.fn() } };
    client.get = jest.fn(() => Promise.reject(Object.assign(new Error('Axios GET mocked'), { config })));
    client.post = jest.fn(() => Promise.reject(Object.assign(new Error('Axios POST mocked'), { config })));
    client.put = jest.fn(() => Promise.reject(Object.assign(new Error('Axios PUT mocked'), { config })));
    client.patch = jest.fn(() => Promise.reject(Object.assign(new Error('Axios PATCH mocked'), { config })));
    client.delete = jest.fn(() => Promise.reject(Object.assign(new Error('Axios DELETE mocked'), { config })));
    return client;
  };

  const create = jest.fn((config?: any) => makeClient(config));
  const axios: any = jest.fn(() => Promise.reject(new Error('Axios direct call mocked')));
  axios.create = create;
  axios.isAxiosError = jest.fn(() => false);

  return {
    __esModule: true,
    default: axios,
    create,
    isAxiosError: axios.isAxiosError,
  };
});

// Globally mock ESM-only react-leaflet to avoid Jest transform issues under react-scripts v5 (Jest 27)
jest.mock('react-leaflet', () => {
  const React = require('react');
  const Stub: React.FC<any> = ({ children }) => React.createElement('div', null, children);
  return {
    __esModule: true,
    MapContainer: Stub,
    TileLayer: Stub,
    Marker: Stub,
    Popup: Stub,
    useMap: () => ({ setView: () => {} }),
    useMapEvents: () => ({}),
  };
});

// Minimal mock for leaflet to satisfy react-leaflet expectations when used
jest.mock('leaflet', () => ({
  __esModule: true,
  CRS: {},
  icon: () => ({}),
}));
