import store from '@/store';

export default function guest({ next }: { next: any }) {
	if (store.getters.isLoggedIn) {
		return next({
			name: 'Home'
		});
	}

	return next();
}
