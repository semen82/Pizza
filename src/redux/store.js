import { createStore, combineReducers } from 'redux';
import menuReducer from './menuReducer';
import homeReducer from './homeReducer';
import cartReducer from './cartReducer';
import adminReducer from './adminReducer';

const reducer = combineReducers({
  menu: menuReducer,
  home: homeReducer,
  cart: cartReducer,
  admin: adminReducer
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
