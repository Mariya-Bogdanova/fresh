import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useSelector } from 'react-redux';
import { productsReduser } from './redusers/productsReduser'; //
import { authReduser } from './redusers/authRedusers';

// const preloadedState = window.localStorage.getItem('redux') ?? '{}';
const store = createStore(
  combineReducers({
    products: productsReduser,
    isAuthenticated: authReduser,
  }),
  // JSON.parse(preloadedState),
  composeWithDevTools(),
);
// store.subscribe(() => {
//   window.localStorage.setItem('redux', JSON.stringify(store.getState()));
// });
export default store;
