/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import ProductsModel from './products.js';
import UserModel from './user.js';

mongoose.connect('mongodb://localhost:27017/fresh', { useNewUrlParser: true });

const title = [
  'Салат капустный',
  'Колбаса',
  'Булка',
  'Борщ',
];

// от 17 июня
const expiryDate = [
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
  '06.18.2021',
  '06.28.2021',
  '06.17.2021',
  '06.20.2021',
];
async function createProducts(title, expiryDate, dateOfManufacture, shelfLife) {
  for (let i = 0; i < 4; i++) {
    // eslint-disable-next-line no-await-in-loop
    await ProductsModel.insertMany({
      title: title[i],
      expiryDate: expiryDate[i],
      dateOfManufacture: dateOfManufacture[i],
      shelfLife: shelfLife[i],
      userID: '60c8b70c66b44422be01c6c3',
    });
  }
}
// createProducts(title, daysOfLife, dateOfManufacture, shelfLife);

async function createUserNumberOne() {
  const hashedPassword = await bcrypt.hash('qwerqwer', process.env.SALT_ROUNDS ?? 10);
  await UserModel.create({
    userName: 'qwer',
    userPassword: hashedPassword,
  });
}
// createUserNumberOne();
