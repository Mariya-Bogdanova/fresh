/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import express from 'express';
import ProductsModel from '../../models/products.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const products = await ProductsModel.find({ userID: req.session.user._id }, { __v: 0, userID: 0 });
    res.json(products);
  })
  .post(async (req, res) => {
    let newIcon;
    const {
      title, shelfLife, dateOfManufacture, expiryDate, icon,
    } = req.body;
    const newProduct = await new ProductsModel({
      title,
      shelfLife,
      dateOfManufacture,
      expiryDate,
      icon,
      userID: req.session.user._id,
    }).save();
    res.json(newProduct._id);
  })
  .delete(async (req, res) => {
    await ProductsModel.findByIdAndDelete(req.body.id);
    res.end();
  });
export default router;
