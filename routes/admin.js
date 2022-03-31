import express from 'express';

import { adminController } from '../controllers/admin.js';

const adminRouter = express.Router();

adminRouter.get('/products/:id/edit', adminController.getEditProduct);
adminRouter.get('/products/add', adminController.getAddProduct);
adminRouter.get('/products', adminController.getProducts);

adminRouter.post('/products/edit', adminController.postEditProduct);
adminRouter.post('/products/add', adminController.postAddProduct);
adminRouter.post('/products/delete', adminController.postDeleteProduct);

export { adminRouter };
