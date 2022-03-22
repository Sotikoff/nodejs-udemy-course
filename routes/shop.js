import express from 'express';

import { shopController } from '../controllers/shop.js';

const shopRouter = express.Router();

shopRouter.get('/', shopController.getHome);
shopRouter.get('/products/:id', shopController.getProduct);
shopRouter.get('/products', shopController.getProducts);
shopRouter.get('/cart', shopController.getCart);
shopRouter.get('/checkout', shopController.getCheckout);
shopRouter.get('/orders', shopController.getOrders);

shopRouter.post('/cart', shopController.postCart);

export { shopRouter };
