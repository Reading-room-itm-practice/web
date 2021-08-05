import store from '@/store'
import { RouteMeta } from 'vue-router'

export default function admin ({ next }: RouteMeta): void {
  if (!store.getters.isAdmin) {
    return next({
      name: 'Home'
    })
  }

  return next()
}
