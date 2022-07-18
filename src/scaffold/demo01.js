// console.log(2 + 3);
// console.log(2 + 3);

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.douyu.com')
  await page.screenshot({ path: 'example.png' })
  await browser.close()
})()
