import Vue from 'vue'
import Vuex from 'vuex'
import { user } from '@/store/modules/user'
import { RootState } from '@/models/root'
import { author } from '@/store/modules/author'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  modules: {
    user,
    author
  }
})
