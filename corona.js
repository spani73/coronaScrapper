const { Cheerio } = require("cheerio");
const request = require("request");
const cheerio = require("cheerio");

request('https://www.worldometers.info/coronavirus/',cb);  

function cb(error, response, html){
    if(error){
        console.error('error:', error); // Print the error if one occurred
    }else{
        handlehtml(html); // Print the HTML for the Google homepage.
    } 
}
function handlehtml(html){
  let selTool = cheerio.load(html);
  let carray = selTool("#maincounter-wrap span");
  console.log("total cases" , selTool(carray[0]).text());
  console.log("total deaths" , selTool(carray[1]).text());
  console.log("total recovered" , selTool(carray[2]).text());

  
}