import store from '@/store'
import { RouteMeta } from 'vue-router'

export default function auth ({ next }: RouteMeta): void {
  if (!store.getters.isLoggedIn) {
    return next({
      name: 'LoginPage'
    })
  }

  return next()
}
