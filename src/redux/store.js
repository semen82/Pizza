import { createStore, combineReducers } from 'redux';
import menuReducer from './menuReducer';

const reducer = combineReducers({
  menu: menuReducer
});

const store = createStore(reducer);

export default store;
