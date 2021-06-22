import {
  SET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT,
} from '../action-types/productsAction-types';

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: {
      products,
    },
  };
}
export function addProduct(title, id) {
  return {
    type: ADD_PRODUCT,
    payload: {
      title,
      id,
    },
  };
}
export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    payload: {
      id,
    },
  };
}
