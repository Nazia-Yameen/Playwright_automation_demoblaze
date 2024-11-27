import { test, expect } from '@playwright/test';

test('laptop', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html#');
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.locator('.card > a').first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.locator('#imgp img').click();
  await page.getByRole('heading', { name: 'Sony vaio i5' }).click();
  await page.getByRole('heading', { name: '$790 *includes tax' }).click();
  await page.getByText('Sony is so confident that the').click();
  await page.getByText('Product description').click();
  await page.goto('https://demoblaze.com/index.html#');
  await page.locator('div:nth-child(3) > .card > a').click();
});