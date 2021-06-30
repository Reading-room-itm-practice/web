import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    email: null
  },
  mutations: {
    setEmail (state, email) {
      state.email = email
    }
  },
  getters: {
    getToken (state) {
      return state.token
    },
    getEmail (state) {
      return state.email
    }
  },
  actions: {
    setEmail ({ commit }, email) {
      commit('setEmail', email)
    }
  }
})
