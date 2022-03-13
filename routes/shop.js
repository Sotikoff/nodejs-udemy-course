import path from 'path';

import express from 'express';

import { products } from './admin.js';

const shopRouter = express.Router();

shopRouter.get('/', (req, res, next) => {
  res.render('shop', {
    products,
    path: '/',
    hasProducts: products.length > 0,
    pageTitle: 'Shop',
    activeShop: true,
    productCSS: true,
  });
});

export { shopRouter };
