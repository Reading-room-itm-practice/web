import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/modules/user';
import { RootState } from '@/models/root';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
	modules: {
		user
	}
});
