import api from '../../api/shop'

const state = {
  all: [],
  viewed: []
}

const getters = {
  viewedProducts: (state) => {
    if (state.all.length && state.viewed.length) {
      return state.viewed.map(({ id }) => {
        const product = state.all.find(product => product.id === id)
        return {
          id,
          model: product.model,
          description: product.description,
          rubRange: product.rubRange,
          euroRange: product.euroRange,
          title: product.title,
          imgUrl: product.imgUrl
        }
      })
    } else {
      return []
    }
  },
}

const actions = {
  getAllProducts ({ commit }) {
    api.getProducts(products => {
      commit('setProducts', products)
    })
  },
  getViewed ({ commit }) {
    api.getViewed(products => {
      commit('setViewed', products)
    })
  },
}

const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  setViewed (state, products) {
    state.viewed = products
  },
  addViewed (state, product) {
    state.viewed = state.viewed.concat(product)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}