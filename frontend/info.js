const axios = require("axios");

const fetchFruit = (fruitName) => {
  axios.get(`https://www.fruityvice.com/api/fruit/${fruitName}`)
    .then(response => {
      console.log(response.data) ;
    })
}