import api from '../../api/shop'

const state = {
  items: [],
  assembling: false
}

const getters = {
  cartProducts: (state, getters, rootState) => {
    if (rootState.products.all.length && state.items.length) {
      return state.items.map(({ id, varId, quantity }) => {
        const product = rootState.products.all.find(product => product.id === id)
        const variant = product.variants.find(variant => variant.varId === varId)
        return {
          id,
          varId,
          quantity,
          title: product.title,
          imgUrl: product.imgUrl,
          price: variant.price,
          spec: variant.spec,
          code: variant.code,
          inventory: variant.inventory
        }
      })
    } else {
      return []
    }
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },
  cartTotalQuantity: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.quantity
    }, 0)
  },
}

const actions = {
  getCartItems ({ commit }) {
    api.getCartItems(items => {
      commit('setCartItems', items)
    })
  },
  checkout ({ commit, state }) {
    api.buyProducts(
      state,
      (res) => { 
        window.alert("Заказ успешно оформлен")
        commit('setCartItems', [] )
      },
      (err) => {
        window.alert("Произошла ошибка, попробуйте через некоторое время")
      }
    )
  },
  incItemQuantity ({ commit, getters }, { id, varId }) {
    getters.cartProducts
    const product = getters.cartProducts.find(product => 
      product.id === id && product.varId === varId)
    if (product.inventory > product.quantity) {
      commit('incrementItemQuantity', { id, varId })
    }
  },
}

const mutations = {
  setCartItems (state, items) {
    state.items = items
  },
  deleteItem (state, { id, varId }) {
    state.items = state.items.filter(item => 
      !(item.id === id && item.varId === varId))
  },
  incrementItemQuantity (state, { id, varId }) {
    const cartItem = state.items.find(item => 
      item.id === id && item.varId === varId)
    cartItem.quantity++
  },
  decrementItemQuantity (state, { id, varId }) {
    const cartItem = state.items.find(item => 
      item.id === id && item.varId === varId)
    if (cartItem.quantity > 1) cartItem.quantity--
  },
  clearCart (state) {
    state.items = []
  },
  setAssembling (state, bool) {
    state.assembling = bool
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}