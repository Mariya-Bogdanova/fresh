/* eslint-disable no-underscore-dangle */
import {
  SET_PRODUCTS,
} from '../action-types/productsAction-types';

const inicialProducts = [];
export function productsReduser(state = inicialProducts, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload.products;

    default:
      return state;
  }
}

export default productsReduser;
