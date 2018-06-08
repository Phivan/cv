async function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.goto('https://phivan.github.io/cv/');
await page.emulateMedia('screen')
await page.setCacheEnabled(false);
await page.setViewport({width: 1920, height: 1200})

await timeout(5000);
await page.pdf({path: 'screenshot.pdf', printBackground: true});


await browser.close();

