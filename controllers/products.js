const products = [];

function getAddProduct(req, res, next) {
  res.render('addProduct', {
    pageTitle: 'Add Product',
    activeAddProduct: true,
    formsCSS: true,
    path: '/admin/add-product',
  });
}

function postAddProduct(req, res) {
  products.push({ title: req.body.title });
  res.redirect('/');
}

function getProducts(req, res, next) {
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
