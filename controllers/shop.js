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
  const { items } = Cart.fetchCart();

  const cartProducts = items.map((item) => ({
    ...item,
    ...(Product.findById(item.id) ?? {}),
  }));

  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your cart',
    cartProducts,
  });
}

function postDeleteProductFromCart(req, res, next) {
  const targetProduct = Product.findById(req.params.id);

  if (targetProduct) {
    Cart.removeProduct(targetProduct);
  }

  res.redirect('/cart');
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
  const targetProduct = Product.findById(req.body.id);

  if (targetProduct) {
    Cart.addProduct(targetProduct);
  }

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
  postDeleteProductFromCart,
};
