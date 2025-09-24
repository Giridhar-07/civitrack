// Jest setup file to initialize in-memory DB and mock email sending
import sequelize from './src/config/database';
import { syncModels } from './src/models';

// Ensure NODE_ENV is test
process.env.NODE_ENV = 'test';

// Speed up bcrypt during tests
process.env.BCRYPT_ROUNDS = '4';

// Mock nodemailer to avoid real SMTP and speed tests
jest.mock('nodemailer', () => {
  const sendMailMock = jest.fn().mockResolvedValue({ messageId: 'test' });
  return {
    __esModule: true,
    default: {
      createTransport: jest.fn(() => ({
        verify: jest.fn().mockResolvedValue(true),
        sendMail: sendMailMock,
      })),
    },
  };
});

beforeAll(async () => {
  // Sync database schema
  await syncModels(true);
});

afterAll(async () => {
  await sequelize.close();
});