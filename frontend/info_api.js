// const axios = require("axios");
import axios from 'axios';

export const fetchFruit = (fruitName) => {
  return axios.get(`https://www.fruityvice.com/api/fruit/${fruitName}`);
}

// export const fetchFruit = (fruitName) => {
//   axios.get(`https://www.fruityvice.com/api/fruit/${fruitName}`)
//     .then(response => {
//       console.log(response.data) ;
//     })
// }