import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { UserState } from '@/models/user'
import { UserStoreMethods } from '@/enums/userStoreMethods'

Vue.use(Vuex)

const TOKEN = 'token'
const EMAIL = 'email'

export const user: StoreOptions<UserState> = {
  state: {
    token: localStorage.getItem(TOKEN) || '',
    email: localStorage.getItem(EMAIL) || ''
  },
  mutations: {
    [UserStoreMethods.setEmail] (state, email: string): void {
      state.email = email
      localStorage.setItem(EMAIL, email)
    },
    [UserStoreMethods.setToken] (state, token: string): void {
      state.token = token
      localStorage.setItem(TOKEN, token)
    }
  },
  getters: {
    [UserStoreMethods.getToken]: (state): string => state.token,
    [UserStoreMethods.getEmail]: (state): string => state.email,
    [UserStoreMethods.isLoggedIn]: (state): boolean => state.token !== ''
  },
  actions: {
    [UserStoreMethods.setEmail] ({ commit }, email: string): void {
      commit(UserStoreMethods.setEmail, email)
    },
    [UserStoreMethods.setToken] ({ commit }, token: string): void {
      commit(UserStoreMethods.setToken, token)
    }
  }
}
