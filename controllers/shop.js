import { Cart } from '../models/cart.js';
import { Product } from '../models/product.js';

function getProducts(req, res, next) {
  const products = Product.fetchAll();

  res.render('shop/productList', {
    products,
    path: '/products',
    pageTitle: 'All products',
  });
}

function getProduct(req, res, next) {
  const { id } = req.params;

  Product.findById(id, (product) => {
    if (product) {
      res.render('shop/productDetails', { product, path: `products/${id}`, pageTitle: 'Product details' });
    } else {
      res.status(404).render('notFound', { pageTitle: 'Not found', path: '' });
    }
  });
}

function getHome(req, res, next) {
  const products = Product.fetchAll() ?? [];

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

function getOrders(req, res, next) {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Orders',
  });
}

function getCheckout(req, res, next) {
  res.render('/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  });
}

function postCart(req, res, next) {
  Cart.addProduct(req.body.id);

  res.redirect(`/products`);
}

export const shopController = {
  getCart,
  getHome,
  getOrders,
  getProduct,
  getCheckout,
  getProducts,

  postCart,
};
