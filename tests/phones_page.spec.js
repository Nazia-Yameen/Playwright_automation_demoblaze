import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html#');
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.locator('.card > a').first().click();
  await page.locator('#imgp img').click();
  await page.getByRole('heading', { name: 'Samsung galaxy s6' }).click();
  await page.getByRole('heading', { name: '$360 *includes tax' }).click();
  await page.getByText('The Samsung Galaxy S6 is').click();
  await page.getByText('Product descriptionThe').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.goto('https://demoblaze.com/index.html#');
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Iphone 6 32gb' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.locator('#imgp img').click();
});