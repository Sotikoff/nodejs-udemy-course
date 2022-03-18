import express from 'express';

import { adminController } from '../controllers/admin.js';

const adminRouter = express.Router();

adminRouter.get('/add-product', adminController.getAddProduct);
adminRouter.post('/add-product', adminController.postAddProduct);
adminRouter.get('/products', adminController.getProducts);

export { adminRouter };
