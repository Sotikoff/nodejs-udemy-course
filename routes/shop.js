import express from 'express';

import { shopController } from '../controllers/shop.js';

const shopRouter = express.Router();

shopRouter.post('/cart/:id/delete', shopController.postDeleteProductFromCart);
shopRouter.post('/cart', shopController.postCart);
shopRouter.get('/products/:id', shopController.getProduct);

shopRouter.get('/products', shopController.getProducts);
shopRouter.get('/cart', shopController.getCart);
shopRouter.get('/checkout', shopController.getCheckout);
shopRouter.get('/orders', shopController.getOrders);
shopRouter.get('/', shopController.getHome);

export { shopRouter };
