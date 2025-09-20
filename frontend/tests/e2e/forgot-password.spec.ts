import { test, expect } from '@playwright/test';

// These tests target the live frontend defined in playwright.config.ts (BASE_URL)
// They are written to be resilient to backend variations by accepting either success or error alerts

// Helper to navigate using baseURL
const forgotPasswordPath = '/forgot-password';

// Function-level comments: Verify the Forgot Password page renders and key UI elements are present
test('Forgot Password page renders with expected UI elements', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}${forgotPasswordPath}`);
  await page.waitForLoadState('domcontentloaded');

  // Heading
  await expect(page.getByRole('heading', { name: 'Reset Password' })).toBeVisible({ timeout: 30000 });

  // Email field by label
  await expect(page.getByLabel('Email Address')).toBeVisible({ timeout: 30000 });

  // Submit button
  await expect(page.getByRole('button', { name: 'Send Reset Instructions' })).toBeVisible({ timeout: 30000 });

  // Back to Login link
  await expect(page.getByRole('link', { name: 'Back to Login' })).toBeVisible({ timeout: 30000 });
});

// Function-level comments: Attempt to request a password reset and assert that either a success or an error alert is shown
// We do not assume a particular backend state; instead we verify the UX responds with an Alert
// This keeps the test stable across staging/production environments
test('Request password reset shows success or error feedback', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}${forgotPasswordPath}`);
  await page.waitForLoadState('domcontentloaded');

  // Fill email (use a deterministic, safe value)
  const testEmail = `e2e.forgot.${Date.now()}@example.com`;
  await page.getByLabel('Email Address').fill(testEmail);

  // Submit
  await page.getByRole('button', { name: 'Send Reset Instructions' }).click();

  // Wait for any alert feedback (MUI Alert uses role="alert")
  const alertLocator = page.getByRole('alert');
  await expect(alertLocator).toBeVisible({ timeout: 30000 });

  // Soft expectations to capture message without flakiness
  const text = await alertLocator.textContent();
  // Accept either success or error messaging; ensure some meaningful text is present
  expect.soft(text?.length || 0).toBeGreaterThan(0);
});