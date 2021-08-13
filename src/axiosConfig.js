import axios from 'axios';
import Vue from 'vue';
import store from '@/store';
import { ErrorNotification } from '@/notifications/error';
import { i18n } from '@/localization/i18n';

axios.defaults.baseURL = 'https://localhost:50359/api/';

axios.interceptors.request.use(
	(request) => {
		const token = store.getters.getToken;

		if (token) {
			request.headers.Authorization = `Bearer ${token}`;
		}

		return request;
	},
	(error) => Promise.reject(error)
);

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (!error.response) {
			Vue.notify(new ErrorNotification(i18n.t('errors.networkError')));
		} else {
			const status = error.response.status;

			if (status === 404) {
				Vue.notify(new ErrorNotification(i18n.t('errors.notFound')));
			} else {
				Vue.notify(new ErrorNotification(error.response.data.message));
			}

			return error;
		}
		return null;
	}
);

export default {};
