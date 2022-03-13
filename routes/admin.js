import path from 'path';

import express from 'express';

const adminRouter = express.Router();

const products = [];

adminRouter.get('/add-product', (req, res, next) => {
  res.render('addProduct', {
    pageTitle: 'Add Product',
    activeAddProduct: true,
    formsCSS: true,
    path: '/admin/add-product',
  });
});

adminRouter.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

export { adminRouter, products };
