import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import RegisterPage from '../views/register/RegisterPage.vue'
import LoginPage from '../views/login/LoginPage.vue'
import ProfilePage from '../views/profile/ProfilePage.vue'
import auth from '@/router/middleware/auth'
import guest from '@/router/middleware/guest'
import store from '@/store'
import UserViewContainer from '@/views/UsersAction/UserViewContainer.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '',
    name: 'UsersAction',
    component: UserViewContainer,
    meta: {
      middleware: [
        guest
      ]
    },
    children: [
      {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
      },
      {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
      }
    ]
  },
  {
    path: '',
    name: 'UsersAction',
    component: UserViewContainer,
    meta: {
      middleware: [
        auth
      ]
    },
    children: [
      {
        path: '/profile',
        name: 'ProfilePage',
        component: ProfilePage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware

  if (!middleware) {
    return next()
  }

  return middleware[0]({
    to,
    from,
    next,
    store
  })
})

export default router
