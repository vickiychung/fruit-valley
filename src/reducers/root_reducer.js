import { combineReducers } from 'redux';
import fruitsReducer from './fruits_reducer';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
  fruits: fruitsReducer,
  modal: modalReducer
});

export default rootReducer;