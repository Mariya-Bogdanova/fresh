/* eslint-disable import/extensions */
import express from 'express';
import ProductsModel from '../../models/products.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const products = await ProductsModel.find({}, { __v: 0 });
    res.json(products);
  });

export default router;
