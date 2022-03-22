import fs from 'fs';
import path from 'path';

import { nanoid } from 'nanoid';
import { relativePath } from '../utils/relativePath.js';
import { DataLayer } from './dataLayer.js';

export class Product {
  static collection = 'products';

  constructor({ title, imageUrl, description, price }) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.id = nanoid();
  }

  save() {
    DataLayer.saveItemToCollection('products', this);
  }

  static fetchAll() {
    return DataLayer.getCollectionItems('products');
  }

  static findById(targetId, callback) {
    const product = DataLayer.getCollectionItems('products').find(({ id }) => id === targetId);

    callback(product);

    return product;
  }
}
