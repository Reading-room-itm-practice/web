import Vue from 'vue'
import Vuex, { Module } from 'vuex'
import { UserState } from '@/models/user'
import { UserStoreMethods } from '@/enums/UserStoreMethods'
import { RootState } from '@/models/root'

Vue.use(Vuex)

const TOKEN = 'token'
const EMAIL = 'email'

export const user: Module<UserState, RootState> = {
  state: {
    token: localStorage.getItem(TOKEN) || '',
    email: localStorage.getItem(EMAIL) || '',
    role: 'User'
  },
  mutations: {
    [UserStoreMethods.setEmail] (state, email: string): void {
      state.email = email
      localStorage.setItem(EMAIL, email)
    },
    [UserStoreMethods.setToken] (state, token: string): void {
      state.token = token
      localStorage.setItem(TOKEN, token)
    },
    [UserStoreMethods.setUserRole] (state, role: string): void {
      state.role = role
    }
  },
  getters: {
    [UserStoreMethods.getToken]: (state): string => state.token,
    [UserStoreMethods.getEmail]: (state): string => state.email,
    [UserStoreMethods.isLoggedIn]: (state): boolean => state.token !== '',
    [UserStoreMethods.getUserRole]: (state): string => state.role
  },
  actions: {
    [UserStoreMethods.setEmail] ({ commit }, email: string): void {
      commit(UserStoreMethods.setEmail, email)
    },
    [UserStoreMethods.setToken] ({ commit }, token: string): void {
      commit(UserStoreMethods.setToken, token)
    },
    [UserStoreMethods.destroySession] ({ commit }): void {
      commit(UserStoreMethods.setToken, '')
      commit(UserStoreMethods.setUserRole, 'User')
    },
    [UserStoreMethods.setUserRole] ({ commit }, role: string): void {
      commit(UserStoreMethods.setUserRole, role)
    }
  }
}
