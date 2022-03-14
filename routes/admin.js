import express from 'express';

import { productsController } from '../controllers/products.js';

const adminRouter = express.Router();

adminRouter.get('/add-product', productsController.getAddProduct);

adminRouter.post('/add-product', productsController.postAddProduct);

export { adminRouter };
