import { Product } from '../models/product.js';

function getAddProduct(req, res, next) {
  res.render('admin/addProduct', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
}

function postAddProduct(req, res) {
  new Product(req.body.title).save();

  res.redirect('/');
}

function getProducts(req, res, next) {
  const products = Product.fetchAll();

  res.render('admin/productList', {
    products,
    path: '/admin/products',
    pageTitle: 'Product list',
  });
}

export const adminController = {
  getProducts,
  getAddProduct,
  postAddProduct,
};