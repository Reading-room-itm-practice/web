import axios from 'axios'
import store from './store'
import { errors } from '@/plugins/errors'
import Vue from 'vue'

axios.defaults.baseURL = 'https://localhost:44381/api/'

axios.interceptors.request.use(
  request => {
    const token = store.getters.token

    if (token) {
      request.headers.Authorization = `Bearer ${token}`
    }
    return request
  },
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      Vue.notify(errors.connection)
    }
  }
)

export default {}
