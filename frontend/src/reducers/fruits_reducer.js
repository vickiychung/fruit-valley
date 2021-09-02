import { RECEIVE_FRUIT_INFO } from '../actions';

const fruitsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_FRUIT_INFO:
      return action.fruitInfo;
  
    default:
      return oldState;
  }
};

export default fruitsReducer;