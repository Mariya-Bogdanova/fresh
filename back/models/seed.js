/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import ProductsModel from './products.js';

mongoose.connect('mongodb://localhost:27017/fresh', { useNewUrlParser: true });

const title = [
  'Салат капустный',
  'Колбаса',
  'Булка',
  'Борщ',
];

// от 15 июня
const daysOfLife = [
  1,
  11,
  0,
  3,
];
const dateOfManufacture = [
  '06.14.2021',
  '06.01.2021',
  '06.14.2021',
  '06.14.2021',
];
const shelfLife = [
  '06.15.2021',
  '06.25.2021',
  '06.14.2021',
  '06.17.2021',
];
async function createProducts(title, daysOfLife, dateOfManufacture, shelfLife) {
  for (let i = 0; i < 4; i++) {
    // eslint-disable-next-line no-await-in-loop
    await ProductsModel.insertMany({
      title: title[i],
      daysOfLife: daysOfLife[i],
      dateOfManufacture: dateOfManufacture[i],
      shelfLife: shelfLife[i],
    });
  }
}

createProducts(title, daysOfLife, dateOfManufacture, shelfLife);
