import fs from 'fs';

import { nanoid } from 'nanoid';
import { DataLayer } from './dataLayer.js';

export class Product {
  #isNew = false;

  constructor({ id, title, imageUrl, description, price }) {
    if (!id) {
      this.#isNew = true;
      this.id = nanoid();
    } else {
      this.id = id;
    }

    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    let products = DataLayer.getCollection('products', []);
    if (this.#isNew) {
      products.push(this);
    } else {
      products = products.map((product) => (product.id === this.id ? { ...product, ...this } : product));
    }

    DataLayer.saveCollection('products', products);
  }

  static fetchAll() {
    return DataLayer.getCollection('products', []);
  }

  static findById(targetId, callback) {
    const product = DataLayer.getCollection('products', []).find(({ id }) => id === targetId);

    if (callback) {
      callback(product);
    }

    return product;
  }

  static deleteById(targetId) {
    const updatedProducts = DataLayer.getCollection('products', []).filter(({ id }) => id !== targetId);
    DataLayer.saveCollection('products', updatedProducts);

    return targetId;
  }
}
