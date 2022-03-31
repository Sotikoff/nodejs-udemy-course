import { DataLayer } from './dataLayer.js';

export class Cart {
  static addProduct(id) {
    //    If cart doesn't exist, create empty cart (just empty obj)
    const cart = DataLayer.getCollection('cart') ?? {};
    const product = DataLayer.getCollection('products', []).find((product) => product.id === id);
    const cartItem = cart.items?.find(({ id: productId }) => productId === id);

    if (cartItem) {
      cartItem.productsCount += 1;
      //    TO DO: make product.pirce type a number, so we don't need parsing it anymore
      cart.totalPrice += parseFloat(product.price);
    } else {
      if (!cart.items) {
        cart.items = [];
      }

      cart.items.push({ productsCount: 1, id });
      cart.totalPrice = parseFloat(product.price);
    }

    DataLayer.saveCollection('cart', cart);
  }
}
