import { Product } from '../models/product.js';

function getAddProduct(req, res, next) {
  res.render('addProduct', {
    pageTitle: 'Add Product',
    activeAddProduct: true,
    formsCSS: true,
    path: '/admin/add-product',
  });
}

function postAddProduct(req, res) {
  new Product(req.body.title).save();

  res.redirect('/');
}

function getProducts(req, res, next) {
  const products = Product.fetchAll();

  res.render('shop', {
    products,
    path: '/',
    hasProducts: products.length > 0,
    pageTitle: 'Shop',
    activeShop: true,
    productCSS: true,
  });
}

export const productsController = {
  getProducts,
  getAddProduct,
  postAddProduct,
};
