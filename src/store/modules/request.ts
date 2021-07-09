import Vue from 'vue'
import Vuex, { Module, StoreOptions } from 'vuex'
import { RequestState } from '@/models/request'
import { RequestStateMethods } from '@/enums/RequestStateMethods'

Vue.use(Vuex)

export const request: StoreOptions<RequestState> = {
  state: {
    isLoading: true
  },
  mutations: {
    [RequestStateMethods.setLoading] (state, isLoading: boolean): void {
      state.isLoading = isLoading
    }
  },
  actions: {
    [RequestStateMethods.setLoading] ({ commit }, isLoading: boolean): void {
      console.log(`Setting req to ${isLoading}`)
      commit(RequestStateMethods.setLoading, isLoading)
    }
  },
  getters: {
    [RequestStateMethods.isLoading]: (state): boolean => state.isLoading
  }
}
