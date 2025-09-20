import { test, expect } from '@playwright/test';

// Function-level comments: Validate login error handling for invalid credentials.
// The test asserts an alert appears after a failed login attempt without asserting the exact backend message.

const loginPath = '/login';

test('Login shows error feedback for invalid credentials', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}${loginPath}`);
  await page.waitForLoadState('domcontentloaded');

  await page.getByLabel('Email Address').fill(`invalid.${Date.now()}@example.com`);
  await page.getByLabel('Password').fill('Wrong#Password1');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Expect an error/info alert to appear
  await expect(page.getByRole('alert')).toBeVisible({ timeout: 30000 });
});