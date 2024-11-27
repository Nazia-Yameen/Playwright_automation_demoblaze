import {test,expect} from '@playwright/test';

test('Home page', async({page})=>{

    await page.goto('https://demoblaze.com/index.html#');
  await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click();
  await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click();
  await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click();
  await page.getByRole('img', { name: 'First slide' }).click();
  await page.getByRole('link', { name: 'CATEGORIES' }).click();
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.locator('.card > a').first().click();
  await page.getByText('About Us', { exact: true }).click();
  await page.getByText('We believe performance needs').click();
  await page.getByText('Get in Touch').click();
  await page.getByText('Address: 2390 El Camino Real').click();
  await page.getByText('Phone: +440').click();
  await page.getByText('Email: demo@blazemeter.com').click();
  await page.getByRole('heading', { name: 'PRODUCT STORE' }).click();
  await page.getByText('Copyright © Product Store').click();
});



