import request from 'supertest';
import app from '../server';
import User from '../models/User';

describe('Auth flows', () => {
  it('register -> verify -> login success', async () => {
    const email = 'testuser@example.com';
    const password = 'Password123!';

    // Register
    const reg = await request(app).post('/api/auth/register').send({
      email,
      password,
      name: 'Test User',
      username: 'testuser'
    });
    expect([201, 200]).toContain(reg.statusCode);

    const user = await User.findOne({ where: { email } });
    expect(user).toBeTruthy();
    if (!user) return;

    const token = user.emailVerificationToken!;
    const verify = await request(app).post('/api/auth/verify-email').send({ token });
    expect([200, 204]).toContain(verify.statusCode);

    const login = await request(app).post('/api/auth/login').send({ email, password });
    expect(login.statusCode).toBe(200);
    expect(login.body).toHaveProperty('data');
    expect(login.body.data).toHaveProperty('token');
  });

  it('login fails for wrong password', async () => {
    const email = 'wrongpass@example.com';
    const password = 'Password123!';

    await request(app).post('/api/auth/register').send({ email, password, name: 'User2', username: 'user2' });

    const res = await request(app).post('/api/auth/login').send({ email, password: 'badpass' });
    expect(res.statusCode).toBe(401);
  });

  it('login fails for unregistered email', async () => {
    const res = await request(app).post('/api/auth/login').send({ email: 'nouser@example.com', password: 'x' });
    expect(res.statusCode).toBe(401);
  });

  it('resend verification and request password reset are 200', async () => {
    const email = 'flow@example.com';
    const password = 'Password123!';
    await request(app).post('/api/auth/register').send({ email, password, name: 'Flow User', username: 'flowuser' });

    const resend = await request(app).post('/api/auth/resend-verification').send({ email });
    expect([200, 204]).toContain(resend.statusCode);

    const resetReq = await request(app).post('/api/auth/request-password-reset').send({ email });
    expect([200, 204]).toContain(resetReq.statusCode);
  });

  // Account lockout tests
  it('locks account after repeated failed login attempts and blocks even correct password until unlocked', async () => {
    const email = 'lockout@example.com';
    const password = 'Password123!';

    // Register and verify
    const reg = await request(app).post('/api/auth/register').send({ email, password, name: 'Lock Out', username: 'lockoutuser' });
    expect([201, 200]).toContain(reg.statusCode);

    const user = await User.findOne({ where: { email } });
    expect(user).toBeTruthy();
    if (!user) return;

    const token = user.emailVerificationToken!;
    const verify = await request(app).post('/api/auth/verify-email').send({ token });
    expect([200, 204]).toContain(verify.statusCode);

    // Perform failed attempts up to threshold
    const maxAttempts = parseInt(process.env.MAX_FAILED_LOGIN_ATTEMPTS || '5', 10);

    for (let i = 1; i < maxAttempts; i++) {
      const res = await request(app).post('/api/auth/login').send({ email, password: 'wrong' + i });
      expect(res.statusCode).toBe(401);
    }

    // The final attempt should trigger lockout
    const lockRes = await request(app).post('/api/auth/login').send({ email, password: 'wrongfinal' });
    expect(lockRes.statusCode).toBe(403);
    expect(lockRes.body.message || '').toMatch(/locked/i);

    // Now attempt correct password; should still be blocked
    const blocked = await request(app).post('/api/auth/login').send({ email, password });
    expect(blocked.statusCode).toBe(403);

    // Manually expire lockout for test determinism
    const lockedUser = await User.findOne({ where: { email } });
    expect(lockedUser).toBeTruthy();
    if (!lockedUser) return;

    lockedUser.lockoutUntil = new Date(Date.now() - 1000) as any; // expired
    await lockedUser.save();

    // Next login should clear lock and succeed
    const after = await request(app).post('/api/auth/login').send({ email, password });
    expect(after.statusCode).toBe(200);
    expect(after.body).toHaveProperty('data');
    expect(after.body.data).toHaveProperty('token');
  });

  // Password reset flow tests
  it('request password reset returns 200 for unknown email (no enumeration)', async () => {
    const res = await request(app)
      .post('/api/auth/request-password-reset')
      .send({ email: 'unknown@example.com' });
    expect([200, 204]).toContain(res.statusCode);
  });

  it('reset password validates token and password length; allows login with new password', async () => {
    const email = 'resetme@example.com';
    const oldPassword = 'Password123!';

    // Register and verify
    await request(app).post('/api/auth/register').send({ email, password: oldPassword, name: 'Reset Me', username: 'resetme' });
    const user = await User.findOne({ where: { email } });
    expect(user).toBeTruthy();
    if (!user) return;

    const verToken = user.emailVerificationToken!;
    await request(app).post('/api/auth/verify-email').send({ token: verToken });

    // Request reset
    const reqRes = await request(app)
      .post('/api/auth/request-password-reset')
      .send({ email });
    expect([200, 204]).toContain(reqRes.statusCode);

    // Reload user to get token
    const withToken = await User.findOne({ where: { email } });
    expect(withToken?.resetPasswordToken).toBeTruthy();
    const resetToken = withToken!.resetPasswordToken!;

    // Invalid token
    const badToken = await request(app)
      .post('/api/auth/reset-password')
      .send({ token: 'invalidtoken', password: 'NewPassword123!' });
    expect(badToken.statusCode).toBe(400);

    // Too short password
    const shortPwd = await request(app)
      .post('/api/auth/reset-password')
      .send({ token: resetToken, password: '123' });
    expect(shortPwd.statusCode).toBe(400);

    // Valid reset
    const good = await request(app)
      .post('/api/auth/reset-password')
      .send({ token: resetToken, password: 'NewPassword123!' });
    expect([200, 204]).toContain(good.statusCode);

    // Login with new password should work
    const loginNew = await request(app)
      .post('/api/auth/login')
      .send({ email, password: 'NewPassword123!' });
    expect(loginNew.statusCode).toBe(200);
    expect(loginNew.body).toHaveProperty('data');
    expect(loginNew.body.data).toHaveProperty('token');
  });

  it('returns 400 on invalid JSON payload to request-password-reset', async () => {
    const res = await request(app)
      .post('/api/auth/request-password-reset')
      .set('Content-Type', 'application/json')
      .send('{ invalid json');
    expect(res.statusCode).toBe(400);
    expect((res.body.message || '').toLowerCase()).toContain('invalid json');
  });
});