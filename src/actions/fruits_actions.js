import * as FruitsAPI from '../fruits_api';

export const RECEIVE_FRUITS = 'RECEIVE_FRUITS'

const receiveFruits = fruits => ({
  type: RECEIVE_FRUITS,
  fruits
})

export const fetchFruits = () => {
  return (dispatch => {
    return (
      FruitsAPI.fetchFruits()
        .then(fruits => dispatch(receiveFruits(fruits)))
    );
  });
};