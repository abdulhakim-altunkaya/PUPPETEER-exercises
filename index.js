const puppeteer = require("puppeteer");

const scrapeFunction = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://google.com");
    await page.screenshot({ path: "./screenshots/google.png"})
    await browser.close();
};
// scrapeFunction();


const scrapeFunction2 = async () => {e
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto("https://bing.com");
    await page.screenshot({ path: "./screenshots/bing.png"})
    await browser.close();
};
// scrapeFunction2();

const scrapeFunction3 = async () => {
    try { /*Mistake 3: use catch with try. Dont use catch alone*/
        let currencyURL= "https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+page+site+area/bugun";
        let browser = await puppeteer.launch();
        let page = await browser.newPage();
        await page.goto(currencyURL, {waitUntil: "networkidle2"});

};



