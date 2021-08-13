import store from '@/store';

export default function auth({ next }: { next: any }) {
	if (!store.getters.isLoggedIn) {
		return next({
			name: 'LoginPage'
		});
	}

	return next();
}
