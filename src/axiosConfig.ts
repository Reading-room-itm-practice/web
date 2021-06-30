import axios from 'axios'
import store from './store'

axios.defaults.baseURL = 'http://localhost:44381/api'

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

export default {}
