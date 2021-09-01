const axios = require("axios");

axios.get('https://www.fruityvice.com/api/fruit/all')
  .then(function (response) {
    console.log(response.data);
  })