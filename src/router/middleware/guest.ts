import store from '@/store'
import { RouteMeta } from 'vue-router'

export default function guest ({ next }: RouteMeta): void {
  if (store.getters.isLoggedIn) {
    return next({
      name: 'Home'
    })
  }

  return next()
}
