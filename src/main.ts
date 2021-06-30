import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosConfig from './axiosConfig'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(axiosConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
