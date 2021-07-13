import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import auth from '@/router/middleware/auth'
import guest from '@/router/middleware/guest'
import RegisterPage from '../views/register/RegisterPage.vue'
import LoginPage from '../views/login/LoginPage.vue'
import ProfilePage from '../views/profile/ProfilePage.vue'
import AdminPage from '../views/admin/AdminPage.vue'
import BookPage from '@/views/book/BookPage.vue'
import EmailConfirmationPage from '@/views/email_confirmation/EmailConfirmationPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: {
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: {
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
    meta: {
      middleware: [
        auth
      ]
    }
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: {
      middleware: [
        auth
      ]
    }
  },
  {
    path: '/book/:id',
    name: 'BookPage',
    component: BookPage
  },
  {
    path: '/emailConfirmation',
    name: 'EmailConfirmationPage',
    component: EmailConfirmationPage,
    meta: {
      middleware: [
        guest
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const middleware = to.meta?.middleware

  if (!middleware) {
    return next()
  }

  return middleware[0]({
    to,
    from,
    next
  })
})

export default router
