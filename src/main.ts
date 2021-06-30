import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosConfig from './axiosConfig'
import ElementUI from 'element-ui'
import Notifications from 'vue-notification'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(axiosConfig)
Vue.use(Notifications)
Vue.use(VueI18n)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
