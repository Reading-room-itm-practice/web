import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export enum UserStoreMethods {
  getEmail = 'getEmail',
  getToken = 'getToken',
  setEmail = 'setEmail',
  setToken = 'setToken'
}

const TOKEN = 'token'
const EMAIL = 'email'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem(TOKEN) || '',
    email: localStorage.getItem(EMAIL) || ''
  },
  mutations: {
    [UserStoreMethods.setEmail] (state, email:string): void {
      state.email = email
      localStorage.setItem(EMAIL, email)
    },
    [UserStoreMethods.setToken] (state, token:string): void {
      state.token = token
      localStorage.setItem(TOKEN, token)
    }
  },
  getters: {
    [UserStoreMethods.getToken]: (state) => state.token,
    [UserStoreMethods.getEmail]: (state) => state.email
  },
  actions: {
    [UserStoreMethods.setEmail] ({ commit }, email) {
      commit(UserStoreMethods.setEmail, email)
    },
    [UserStoreMethods.setToken] ({ commit }, token) {
      commit(UserStoreMethods.setToken, token)
    }
  }
})
