/*Fake shop api*/
import _products from './products.json'
import _cartItems from './cart-items.json'
import _viewed from './viewed.json'

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },
  getCartItems (cb) {
    setTimeout(() => cb(_cartItems), 100)
  },
  getViewed (cb) {
    setTimeout(() => cb(_viewed), 100)
  },
  buyProducts (items, cb, errorCb) {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(items),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(cb)
    .catch(errorCb)
  }
}