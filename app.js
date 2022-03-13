import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';

import { adminRouter, products } from './routes/admin.js';
import { shopRouter } from './routes/shop.js';

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(shopRouter);
app.use('/admin', adminRouter);
app.use((req, res, next) => {
  res.status(404).render('notFound', { pageTitle: 'Oops. 404', layout: false });
  // res.status(404).sendFile(path.join(__dirname, './views/notFound.html'));
});

app.listen(3000);
