import store from '@/store'

export default function guest ({ next }) {
  if (store.getters.isLoggedIn) {
    return next({
      name: 'Home'
    })
  }

  return next()
}
