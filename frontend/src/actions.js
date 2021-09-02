import * as FruitsAPI from './info_api';

export const RECEIVE_FRUIT_INFO = 'RECEIVE_FRUIT_INFO';

const receiveFruitInfo = fruitInfo => ({
  type: RECEIVE_FRUIT_INFO,
  fruitInfo
});

export const fetchFruitInfo = fruitName => {
  return (dispatch => {
    return (
      FruitsAPI.fetchFruit(fruitName)
        .then(fruitInfo => dispatch(receiveFruitInfo(fruitInfo)))
    );
  });
};