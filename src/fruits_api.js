import axios from 'axios';

export const fetchFruits = () => {
  return axios.get('/api/fruit/all');
}