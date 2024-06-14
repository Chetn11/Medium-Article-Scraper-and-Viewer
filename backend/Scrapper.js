const { default: axios } = require("axios");
const cheerio=require("cheerio")

async function scrapeMedium() {
    const url = "https://medium.com/search?q=coding";
    const result = [];
    await axios.get(url).then((response) => {
      const html_data = response.data;
      // console.log(html_data)
      const $ = cheerio.load(html_data);
      $('.l.ae>div:nth-child(2)>.co.bg.cp.cq.cr.cs').each(function(ele,index){
        console.log($(this).find('h2').text()+" "+"done");
        return false
      })
    ;
      // console.log($('.l.ae>div:nth-child(2)>.co.bg.cp.cq.cr.cs h2')+" "+"done");
     
    });
    return result;
  }

  module.exports={scrapeMedium};