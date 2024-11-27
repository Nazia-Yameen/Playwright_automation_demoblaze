import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html#');
  await page.getByRole('link', { name: 'Monitors' }).click();
  await page.getByRole('link', { name: 'Apple monitor' }).click();
  await page.locator('#imgp img').click();
  await page.getByRole('heading', { name: 'Apple monitor' }).click();
  await page.getByText('LED Cinema Display features a').click();
  await page.getByRole('heading', { name: '$400 *includes tax' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.goto('https://demoblaze.com/index.html#');
  await page.getByRole('link', { name: 'Monitors' }).click();
  await page.getByRole('link', { name: 'ASUS Full HD' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
});