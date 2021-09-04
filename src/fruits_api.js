import axios from 'axios';

export const fetchFruits = () => {
  return axios.get('https://www.fruityvice.com/api/fruit/all');
}