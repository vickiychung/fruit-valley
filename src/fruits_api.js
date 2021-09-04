import axios from 'axios';

export const fetchFruits = () => {
  return axios.get('https://www.fruityvice.com/api/fruit/all');
}

export const fetchFruit = (fruitName) => {
  return axios.get(`https://www.fruityvice.com/api/fruit/${fruitName}`);
}