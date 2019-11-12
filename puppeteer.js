const puppeteer = require('puppeteer');

(async () => {
  const url = 'http://www.pinterest.com/';
  const  browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path:'screenshot.png', fullPage: true});

  browser.close();
})();
