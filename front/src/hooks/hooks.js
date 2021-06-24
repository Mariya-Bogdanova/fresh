/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import moment from 'moment';

export function useCreateDayOfLife(product) {
  const {
    shelfLife, dateOfManufacture, expiryDate,
  } = product;
  const myDate = new Date(new Date().setHours(0, 0, 0, 0));
  if (shelfLife) {
    product.DayOfLife = Math.floor((moment(shelfLife).diff(moment(myDate), 'days', true))) + 1;
  } else {
    product.DayOfLife = expiryDate - (Math.floor((moment(myDate).diff(moment(dateOfManufacture), 'days', true))) + 2) + 2;
  }
  return product;
}
