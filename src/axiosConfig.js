import axios from 'axios'
import store from '@/store'
import { errors } from '@/plugins/errors'
import Vue from 'vue'
import { RequestStateMethods } from '@/enums/RequestStateMethods'

axios.defaults.baseURL = 'https://localhost:44381/api/'

axios.interceptors.request.use(
  request => {
    const token = store.getters.token
    store.dispatch([RequestStateMethods.setLoading], true)

    if (token) {
      request.headers.Authorization = `Bearer ${token}`
    }
    store.dispatch([RequestStateMethods.setLoading], false)
    return request
  },
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      Vue.notify(errors.connection)
    } else {
      const status = error.response.status

      if (status === 404) {
        Vue.notify(errors.notFound)
      }
    }
  }
)

export default {}
