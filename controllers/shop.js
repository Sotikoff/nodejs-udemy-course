import { Cart } from '../models/deprecated/cart.js';
import { Product } from '../models/Product.js';

async function getProducts(req, res, next) {
  const products = await Product.fetchAll();

  res.render('shop/productList', {
    products,
    path: '/products',
    pageTitle: 'All products',
  });
}

async function getProduct(req, res, next) {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (product) {
    res.render('shop/productDetails', { product, path: `products/${id}`, pageTitle: 'Product details' });
  } else {
    res.status(404).render('notFound', { pageTitle: 'Not found', path: '' });
  }
}

async function getHome(req, res, next) {
  const products = await Product.fetchAll();

  res.render('shop/home', {
    products,
    path: '/',
    pageTitle: 'Shop',
  });
}

async function getCart(req, res, next) {
  const { items } = Cart.fetchCart();

  const cartProducts = items.map(async (item) => {
    const product = await Product.findById(item.id);

    return {
      ...item,
      ...(product ?? {}),
    };
  });

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

async function postCart(req, res, next) {
  const targetProduct = await Product.findById(req.body.id);

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
