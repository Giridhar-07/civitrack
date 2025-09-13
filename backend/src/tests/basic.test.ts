import request from 'supertest';
import app from '../server';

describe('Basic API tests', () => {
  it('should respond from unified health endpoint with expected shape', async () => {
    const res = await request(app).get('/api/health');

    // Accept OK or degraded/unhealthy depending on DB/SMTP availability in env
    expect([200, 503]).toContain(res.statusCode);

    // Status should be one of the known states
    expect(['ok', 'degraded', 'unhealthy']).toContain(res.body.status);

    // Should include version, environment, and checks block
    expect(res.body).toHaveProperty('version');
    expect(res.body).toHaveProperty('environment');
    expect(res.body).toHaveProperty('checks');
    expect(res.body.checks).toHaveProperty('database');
    expect(res.body.checks).toHaveProperty('email');
    expect(res.body.checks.database).toHaveProperty('ok');
    expect(res.body.checks.email).toHaveProperty('ok');
  });
});