import { Product } from '../models/product.js';

function getProducts(req, res, next) {
  const products = Product.fetchAll();

  res.render('shop/productList', {
    products,
    path: '/products',
    pageTitle: 'All products',
  });
}

function getHome(req, res, next) {
  const products = Product.fetchAll();

  res.render('shop/home', {
    products,
    path: '/',
    pageTitle: 'Shop',
  });
}

function getCart(req, res, next) {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your cart',
  });
}

function getCheckout(req, res, next) {
  res.render('/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  });
}

export const shopController = {
  getCart,
  getHome,
  getCheckout,
  getProducts,
};
