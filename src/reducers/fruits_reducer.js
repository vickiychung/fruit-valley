import { RECEIVE_FRUITS, RECEIVE_FRUIT_INFO } from '../actions/fruits_actions';

const fruitsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_FRUITS:
      return action.fruits;

    case RECEIVE_FRUIT_INFO:
      return action.fruitInfo;
  
    default:
      return oldState;
  }
};

export default fruitsReducer;