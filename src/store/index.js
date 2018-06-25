import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'blue',
    orders: {
      len: 0
    },
    favorites: {
      len: 0
    }
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme
    },
    setOrder(state, len) {
      if (len) {
        state.orders.len += len
      } else {
        state.orders.len = 0
      }
    },
    setFavorite(state, len) {
      if (len) {
        state.favorites.len += len
      } else {
        state.favorites.len = 0
      }
    }
  },
  actions: {
    setTheme({
      commit
    }, theme) {
      commit('setTheme', theme)
    },
    setOrder({
      commit
    }, order) {
      commit('setOrder', order)
    },
    setFavorite({
      commit
    }, favorite) {
      commit('setFavorite', favorite)
    }
  }
})