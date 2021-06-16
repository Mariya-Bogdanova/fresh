import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReduser } from './redusers/productsReduser'; //
import { authReduser } from './redusers/authRedusers'; //

const store = createStore(
  combineReducers({
    products: productsReduser,
    isAuthenticated: authReduser,
  }),
  composeWithDevTools(),
);

export default store;
