import { combineReducers } from 'redux';
import fruitsReducer from './fruits_reducer';

const rootReducer = combineReducers({
  fruits: fruitsReducer
});

export default rootReducer;