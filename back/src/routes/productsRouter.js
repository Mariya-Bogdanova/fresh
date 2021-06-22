/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import express from 'express';
import ProductsModel from '../../models/products.js';
import UserModel from '../../models/user.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const products = await ProductsModel.find({ userID: req.session.user._id }, { __v: 0, userID: 0 });
    res.json(products);
  })
  .post(async (req, res) => {
    const {
      title, shelfLife, dateOfManufacture, expiryDate,
    } = req.body;
    console.log(1111111111, shelfLife);
    const newProduct = await new ProductsModel({
      title, shelfLife, dateOfManufacture, expiryDate, userID: req.session.user._id,
    }).save();
    console.log(2222222222, newProduct.shelfLife);
    console.log(333333333333, newProduct.shelfLife.toLocaleString());

    console.log(44444444444, new Date());
    console.log(555555555555, new Date().toLocaleString());
    res.end();
  })
  .delete(async (req, res) => {
    await ProductsModel.findByIdAndDelete(req.body.id);
    res.end();
  });
export default router;
