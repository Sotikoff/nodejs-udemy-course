import { Product } from '../models/product.js';

function getAddProduct(req, res, next) {
  res.render('admin/editProduct', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editMode: false,
  });
}

function getEditProduct(req, res, next) {
  const { id } = req.params;

  const product = Product.findById(id);

  if (!product) {
    res.render('notFound', { pageTitle: 'Product not found', path: req.path });

    return;
  }

  res.render('admin/editProduct', {
    pageTitle: 'Edit Product',
    path: '/admin/edit-product/:id',
    product,
    editMode: true,
  });
}

function postAddProduct(req, res) {
  new Product(req.body).save();

  res.redirect('/');
}

function postEditProduct(req, res, next) {}

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
  getEditProduct,
  postAddProduct,
  postEditProduct,
};
