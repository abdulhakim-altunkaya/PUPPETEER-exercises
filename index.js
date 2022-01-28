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
        const currencyData = await page.evaluate( async () => { 
          const tds = Array.from(document.querySelectorAll('table tr td'))
          return tds.map(td => td.innerText)
        });
        await browser.close();
        const currencyArray = [currencyData[4], currencyData[24]];
        const [USD, EUR] = currencyArray;
        const currencyObject = JSON.stringify({ USD, EUR });
        console.log(currencyObject);
      } catch (e) {
        console.log("error happened: "+e.message);
      }
};
//scrapeFunction3();

const scrapeFunction4 = async () => {
    let browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();
    await page.goto('https://jsitor.com/c0rM-YohL', {waitUntil: 'networkidle0'});

    await browser.close();
};
scrapeFunction4();