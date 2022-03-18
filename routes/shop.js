import express from 'express';

import { shopController } from '../controllers/shop.js';

const shopRouter = express.Router();

shopRouter.get('/', shopController.getHome);
shopRouter.get('/products', shopController.getProducts);
shopRouter.get('/cart', shopController.getCart);
shopRouter.get('/checkout', shopController.getCheckout);

export { shopRouter };
