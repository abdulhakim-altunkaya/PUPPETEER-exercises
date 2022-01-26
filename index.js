const puppeteer = require("puppeteer");

const scrapeFunction = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://google.com");
    await page.screenshot({ path: "./screenshots/google.png"})
    await browser.close();
};
// scrapeFunction();


const scrapeFunction2 = async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto("https://bing.com");
    await page.screenshot({ path: "./screenshots/bing.png"})
    await browser.close();
};
scrapeFunction2();