import { nanoid } from 'nanoid';

const products = [];

export class Product {
  constructor({ title, imageUrl, description, price }) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.id = nanoid();
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }

  static findById(targetId, callback) {
    const product = products.find(({ id }) => id === targetId);

    callback(product);

    return product;
  }
}
