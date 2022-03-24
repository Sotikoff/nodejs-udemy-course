import express from 'express';

import { adminController } from '../controllers/admin.js';

const adminRouter = express.Router();

adminRouter.get('/add-product', adminController.getAddProduct);
adminRouter.get('/edit-product/:id', adminController.getEditProduct);
adminRouter.get('/products', adminController.getProducts);

adminRouter.post('/edit-product', adminController.postEditProduct);
adminRouter.post('/add-product', adminController.postAddProduct);

export { adminRouter };
