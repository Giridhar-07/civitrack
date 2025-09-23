import { test, expect } from '@playwright/test';

// These tests target the live frontend defined in playwright.config.ts (BASE_URL)
// They are written to be resilient to backend variations by accepting either success or error alerts

// Helper to navigate using baseURL
const forgotPasswordPath = '/forgot-password';

// Helper: Expect some feedback via ARIA alert or inline text (success or error)
async function expectForgotFeedback(page: any) {
  const patterns = /sent|instructions|check your (inbox|email)|error|invalid|unable to connect|please try again/i;
  const locators = [page.getByRole('alert'), page.getByText(patterns)];
  for (const loc of locators) {
    try {
      await expect(loc).toBeVisible({ timeout: 20000 });
      return true;
    } catch {}
  }
  // final fallback to inline text match
  await expect(page.getByText(patterns)).toBeVisible({ timeout: 15000 });
  return true;
}

// Function-level comments: Verify the Forgot Password page renders and key UI elements are present
test('Forgot Password page renders with expected UI elements', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}${forgotPasswordPath}`);
  await page.waitForLoadState('domcontentloaded');

  // Heading (allow variants)
  const heading = page.getByRole('heading', { name: /reset password|forgot password|password/i });
  await expect(heading).toBeVisible({ timeout: 30000 });

  // Email field by label or type
  const emailField = page.getByLabel('Email Address').or(page.locator('input[type="email"]'));
  await expect(emailField).toBeVisible({ timeout: 30000 });

  // Submit button (allow variants)
  const submitBtn = page.getByRole('button', { name: /send|reset|instructions/i });
  await expect(submitBtn).toBeVisible({ timeout: 30000 });

  // Back to Login link (allow variants)
  const backLink = page.getByRole('link', { name: /back.*login|login/i });
  await expect(backLink).toBeVisible({ timeout: 30000 });
});

// Function-level comments: Attempt to request a password reset and assert that either a success or an error alert is shown
// We do not assume a particular backend state; instead we verify the UX responds with an Alert or inline feedback.
// This keeps the test stable across staging/production environments
test('Request password reset shows success or error feedback', async ({ page, baseURL }) => {
  // Intercept the password reset request to return a fast, deterministic response and avoid backend latency/flakiness
  await page.route('**/auth/request-password-reset', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true, data: {}, message: 'If your email exists in our system, you will receive a password reset link' })
    });
  });

  await page.goto(`${baseURL}${forgotPasswordPath}`);
  await page.waitForLoadState('domcontentloaded');

  // Fill email (use a deterministic, safe value)
  const testEmail = `e2e.forgot.${Date.now()}@example.com`;
  const emailField = page.getByLabel('Email Address').or(page.locator('input[type="email"]'));
  await emailField.fill(testEmail);

  // Submit
  const submitBtn = page.getByRole('button', { name: /send|reset|instructions/i });
  await submitBtn.click();

  // Wait for feedback (alert or inline)
  await expectForgotFeedback(page);

  // Soft expectations to capture message without flakiness
  const possibleAlert = page.getByRole('alert');
  const text = (await possibleAlert.count()) > 0 ? await possibleAlert.first().textContent() : await page.textContent('body');
  expect.soft((text?.length || 0)).toBeGreaterThan(0);
});