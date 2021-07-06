import store from '@/store'

export default function auth ({ next }) {
  if (!store.getters.isLoggedIn) {
    return next({
      name: 'LoginPage'
    })
  }

  return next()
}
