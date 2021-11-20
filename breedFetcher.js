const request = require('request');


const fetchBreedDescription = function(catBreed, callback) {

  let catApiKey = `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`;
  request(catApiKey, (error, response, body) => {
    const data = JSON.parse(body);

    if (data.length === 0) {
      return callback([], null);
    } else {
      return callback(null, data['0']['description']);
    }
  
  });
};








module.exports = {
  fetchBreedDescription,
};
