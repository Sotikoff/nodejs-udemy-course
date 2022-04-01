import { v4 } from 'uuid';

//  The dependency is deleted
// import { db } from '../mysqlDB/db.js';
const db = {};

export class Product {
  #isNew = false;

  constructor({ id, title, imageUrl, description, price }) {
    if (!id) {
      this.id = v4();
    } else {
      this.id = id;
    }

    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    db.execute('INSERT INTO products (id, title, price, description, imageUrl) VALUES (?, ?, ?, ?, ?)', [
      this.id,
      this.title,
      this.price,
      this.description,
      this.imageUrl,
    ]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products').then(([rows]) => rows);
  }

  static findById(targetId, callback) {
    return db.execute('SELECT * FROM products WHERE id = ?', [targetId]).then(([[product]]) => product);
  }

  static deleteById(targetId) {
    const updatedProducts = FileDataLayer.getCollection('products', []).filter(({ id }) => id !== targetId);
    FileDataLayer.saveCollection('products', updatedProducts);

    return targetId;
  }
}
