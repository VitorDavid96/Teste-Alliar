

const puppeteer = require('puppeteer'); 

( async () => {

   const browser = await puppeteer.launch({
      handless:false
   });
   
   const page = await browser.newPage();
   await page.viewport({
      width:1920,
      height:1080
   })

   await page.goto ('https://www.olx.com.br/');
   await page.waitForSelector ('input[id="searchtext-input"]');
   await page.type('input[id="searchtext-input"]', 'ASDADASDasd',{delay:100});
   
   //await page.waitForSelector ('[class="search-button-submit"]');
   await page.click('[class="search-button-submit"]')
   

   await page.screenshot ({path:'teste_alliar_Invalido.png'});
   await browser.close();
})();

