const request = require('request');

const catSearch = process.argv.slice(2);
let catApiKey = `https://api.thecatapi.com/v1/breeds/search?q=${catSearch}`; 
//console.log(catApiKey);

request(catApiKey, (error, response, body) => {
  //console.log('error', error);
  //console.log('statusCode:', response & response.statusCode);
  
  console.log('body:', body);
})