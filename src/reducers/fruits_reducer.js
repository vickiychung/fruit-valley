import { RECEIVE_FRUITS } from '../actions/fruits_actions';

const fruitsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_FRUITS:
      return action.fruits;
  
    default:
      return oldState;
  }
};

export default fruitsReducer;