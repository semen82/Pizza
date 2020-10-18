import { createStore, combineReducers } from 'redux';
import menuReducer from './menuReducer';
import homeReducer from './homeReducer';
import cartReducer from './cartReducer';

const reducer = combineReducers({
  menu: menuReducer,
  home: homeReducer,
  cart: cartReducer
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
