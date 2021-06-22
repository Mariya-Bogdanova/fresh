/* eslint-disable no-underscore-dangle */
import {
  SET_PRODUCTS, DELETE_PRODUCT,
} from '../action-types/productsAction-types';

const inicialProducts = [];
export function productsReduser(state = inicialProducts, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload.products;
    case DELETE_PRODUCT:
      console.log(state);
      return [
        ...state.filter((product) => product._id !== action.payload.id),
      ];
    default:
      return state;
  }
}

export default productsReduser;
