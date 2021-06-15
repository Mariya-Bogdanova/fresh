import {
  SET_PRODUCTS,
} from '../action-types/productsAction-types';

// eslint-disable-next-line import/prefer-default-export
export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: {
      products,
    },
  };
}
