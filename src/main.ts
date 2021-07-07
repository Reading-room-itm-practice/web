import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosConfig from './axiosConfig'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Notifications from 'vue-notification'
import globalStyles from './plugins/globalStyles'
import { i18n } from '@/localization/i18n'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(axiosConfig)
Vue.use(Notifications)
Vue.use(globalStyles)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
