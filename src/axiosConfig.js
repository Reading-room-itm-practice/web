import axios from 'axios'
import store from './store'
import { i18n } from '@/localization/i18n'
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
      Vue.notify({
        group: 'error',
        title: i18n.t('errors.title'),
        text: i18n.t('errors.networkError')
      })
    }
  }
)

export default {}
