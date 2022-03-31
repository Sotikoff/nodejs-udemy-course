import express from 'express';
import bodyParser from 'body-parser';

import { adminRouter } from './routes/admin.js';
import { shopRouter } from './routes/shop.js';
import { errorController } from './controllers/error.js';

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(shopRouter);
app.use('/admin', adminRouter);
app.use(errorController.notFound);

app.listen(3000);
