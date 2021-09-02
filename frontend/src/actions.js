import * as FruitsAPI from './info_api';

export const FETCH_FRUIT_INFO = 'FETCH_FRUIT_INFO';

const receiveFruitInfo = fruitInfo => ({
  type: FETCH_FRUIT_INFO,
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