const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the Medium search page
  await page.goto('https://medium.com/search?q=coding', { waitUntil: 'networkidle2' });

  // Wait for the target element to be rendered
  await page.waitForSelector('.l.ae>div:nth-child(2)>.co.bg.cp.cq.cr.cs .pf.l h2');

  // Extract the desired data
  const data = await page.evaluate(() => {
    // Select all elements matching the selector
    const elements = document.querySelectorAll('.l.ae>div:nth-child(2)>.co.bg.cp.cq.cr.cs .pf.l h2');
    // Extract the text content from each element
    const results = [];
    elements.forEach(element => {
      results.push(element.textContent);
    });
    return results;
  });

  // Output the scraped data
  console.log(data);

  // Close the browser
  await browser.close();
})();
