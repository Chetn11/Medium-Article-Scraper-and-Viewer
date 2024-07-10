const puppeteer = require('puppeteer');
const crypto = require('crypto');

const scrapData = async (value) => {
  console.log('Starting Puppeteer...');

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    console.log(`Navigating to Medium search page for query: ${value}`);
    await page.goto(`https://medium.com/search?q=${value}`);

    console.log('Waiting for selector...');
    await page.waitForSelector('div[role="link"]');

    console.log('Extracting data from the page...');
    const data = await page.evaluate(() => {
      const elements = document.querySelectorAll('div[role="link"]');
      const articleArray = Array.from(elements).slice(0, 5);
      const results = [];

      articleArray.forEach((element) => {
        const title = element.querySelector('h2')?.innerText || 'No title';
        const description = element.querySelector('h3')?.innerText || 'No description';
        const link = element.getAttribute('data-href') || 'No link';
        const author = element.querySelector('a[href^="/@"] p')?.innerText || 'No author';
        const id = crypto.randomUUID();

        results.push({ id, title, description, link, author });
      });

      return results;
    });

    await browser.close();
    console.log('Data extraction successful:', data);
    return data;
  } catch (error) {
    console.error('Error in scrapData function:', error);
    throw new Error('Scraping failed');
  }
};

module.exports = scrapData;
