import store from '@/store'

export default function auth ({ next }): void {
  if (!store.getters.isLoggedIn) {
    return next({
      name: 'LoginPage'
    })
  }

  return next()
}
