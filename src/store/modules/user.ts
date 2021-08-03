import Vue from 'vue'
import Vuex, { Module } from 'vuex'
import { UserState } from '@/models/states/user'
import { UserStoreMethods } from '@/enums/UserStoreMethods'
import { RootState } from '@/models/root'
import { UserRoles } from '@/enums/UserRoles'
import { UserStoreKeys } from '@/enums/UserStoreKeys'
import { UserStoreDefaults } from '@/enums/UserStoreDefaults'

Vue.use(Vuex)

export const user: Module<UserState, RootState> = {
  state: {
    token: localStorage.getItem(UserStoreKeys.TOKEN) || UserStoreDefaults.STRING_EMPTY,
    email: localStorage.getItem(UserStoreKeys.EMAIL) || UserStoreDefaults.STRING_EMPTY,
    role: UserRoles.USER,
    theme: localStorage.getItem(UserStoreKeys.THEME) || UserStoreDefaults.DEFAULT_THEME,
    routeModifier: UserStoreDefaults.STRING_EMPTY
  },
  mutations: {
    [UserStoreMethods.setEmail] (state, email: string): void {
      state.email = email
      localStorage.setItem(UserStoreKeys.EMAIL, email)
    },
    [UserStoreMethods.setToken] (state, token: string): void {
      state.token = token
      localStorage.setItem(UserStoreKeys.TOKEN, token)
    },
    [UserStoreMethods.setUserRole] (state, role: string): void {
      state.role = role
    },
    [UserStoreMethods.setTheme] (state, theme: string): void {
      state.theme = theme
      localStorage.setItem(UserStoreKeys.THEME, theme)
    }
  },
  getters: {
    [UserStoreMethods.getToken]: (state): string => state.token,
    [UserStoreMethods.getEmail]: (state): string => state.email,
    [UserStoreMethods.isLoggedIn]: (state): boolean => state.token !== UserStoreDefaults.STRING_EMPTY,
    [UserStoreMethods.getUserRole]: (state): string => state.role,
    [UserStoreMethods.getTheme]: (state): string => state.theme,
    [UserStoreMethods.getRouteModifier]: (state): string => state.role.includes(UserRoles.ADMIN) ? UserRoles.ADMIN : UserStoreDefaults.STRING_EMPTY,
    [UserStoreMethods.isAdmin]: (state, getters): boolean => getters.getRouteModifier === UserRoles.ADMIN
  },
  actions: {
    [UserStoreMethods.setEmail] ({ commit }, email: string): void {
      commit(UserStoreMethods.setEmail, email)
    },
    [UserStoreMethods.setToken] ({ commit }, token: string): void {
      commit(UserStoreMethods.setToken, token)
    },
    [UserStoreMethods.destroySession] ({ commit }): void {
      commit(UserStoreMethods.setToken, UserStoreDefaults.STRING_EMPTY)
      commit(UserStoreMethods.setUserRole, UserRoles.USER)
    },
    [UserStoreMethods.setUserRole] ({ commit }, role: string): void {
      commit(UserStoreMethods.setUserRole, role)
    },
    [UserStoreMethods.setTheme] ({ commit }, theme: string): void {
      commit(UserStoreMethods.setTheme, theme)
    }
  }
}
