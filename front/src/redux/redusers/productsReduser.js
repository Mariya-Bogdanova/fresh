/* eslint-disable no-underscore-dangle */
import {
  SET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT,
} from '../action-types/productsAction-types';

const inicialProducts = [];
export function productsReduser(state = inicialProducts, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload.products;
    case ADD_PRODUCT:
      return [
        ...state,
        action.payload.newProduct,
      ];
    case DELETE_PRODUCT:
      return [
        ...state.filter((product) => product._id !== action.payload.id),
      ];
    default:
      return state;
  }
}

export default productsReduser;
