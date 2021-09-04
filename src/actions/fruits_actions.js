import * as FruitsAPI from '../fruits_api';

export const RECEIVE_FRUITS = 'RECEIVE_FRUITS'
export const RECEIVE_FRUIT_INFO = 'RECEIVE_FRUIT_INFO';

const receiveFruits = fruits => ({
  type: RECEIVE_FRUITS,
  fruits
})

const receiveFruitInfo = fruitInfo => ({
  type: RECEIVE_FRUIT_INFO,
  fruitInfo
});

export const fetchFruits = () => {
  return (dispatch => {
    return (
      FruitsAPI.fetchFruits()
        .then(fruits => dispatch(receiveFruits(fruits)))
    );
  });
};

export const fetchFruitInfo = fruitName => {
  return (dispatch => {
    return (
      FruitsAPI.fetchFruit(fruitName)
        .then(fruitInfo => dispatch(receiveFruitInfo(fruitInfo)))
    );
  });
};