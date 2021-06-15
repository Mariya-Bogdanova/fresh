import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReduser } from './redusers/productsReduser'; //

const preloadedState = window.localStorage.getItem('redux') ?? '{}';

const store = createStore(
  combineReducers({
    products: productsReduser,
  }),
  JSON.parse(preloadedState),
  composeWithDevTools(),
);

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
});

export default store;
