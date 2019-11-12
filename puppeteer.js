const puppeteer = require('puppeteer');

(async () => {
  const  browser = await puppeteer.launch();
  const page = await browser.newPage();
  await browser = page.goto('http://www.pinterest.com/);
  await screenshot = page.screenshot({path:'screenshot.png', fullPage: true});

  browser.close();
})();
