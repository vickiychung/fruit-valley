const axios = require("axios");

const fetchFruit = (fruitName) => {
  axios.get(`https://www.fruityvice.com/api/fruit/${fruitName}`)
    .then(response => {
      console.log(response.data) ;
    })
}

// axios.get('https://www.fruityvice.com/api/fruit/all')
//   .then(function (response) {
//     console.log(response.data);
//   })