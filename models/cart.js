import { FileDataLayer } from './fileDataLayer.js';

export class Cart {
  static addProduct(product) {
    //    If cart doesn't exist, create empty cart (just empty obj)
    const cart = FileDataLayer.getCollection('cart', {});
    const cartItem = this.findById(product.id);

    if (cartItem) {
      cartItem.count += 1;
      //    TO DO: make product.pirce type a number, so we don't need parsing it anymore
      cart.totalPrice += parseFloat(product.price);
      cart.items = cart.items.map((item) => (item.id === cartItem.id ? cartItem : item));
    } else {
      if (!cart.items) {
        cart.items = [];
        cart.totalPrice = 0;
      }

      cart.items.push({ count: 1, id: product.id });
      cart.totalPrice += parseFloat(product.price);
    }

    FileDataLayer.saveCollection('cart', cart);
  }

  static findById(id) {
    return FileDataLayer.getCollection('cart', {}).items?.find(({ id: productId }) => productId === id);
  }

  static removeProduct(product) {
    const cart = FileDataLayer.getCollection('cart');

    if (!cart) {
      throw new Error("Cart doesn't exist");
    }

    let productQuantity = 0;

    cart.items = cart.items.filter(({ id, count }) => {
      if (id === product.id) {
        productQuantity = count;

        return false;
      }

      return true;
    });

    cart.totalPrice -= product.price * productQuantity;

    FileDataLayer.saveCollection('cart', cart);
  }

  static fetchCart() {
    return FileDataLayer.getCollection('cart');
  }
}
