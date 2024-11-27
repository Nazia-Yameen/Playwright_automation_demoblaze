import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html#');
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.locator('#recipient-email').click();
  await page.locator('#recipient-email').fill('n@gmal.com');
  await page.getByLabel('Contact Email:').click();
  await page.getByLabel('Contact Email:').fill('herry');
  await page.getByLabel('Message:').click();
  await page.getByLabel('Message:').fill('hallo guten tag');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send message' }).click();
});