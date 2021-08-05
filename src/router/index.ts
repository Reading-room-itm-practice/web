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
import AuthorPage from '@/views/author/AuthorPage.vue'
import CategoryPage from '@/views/category/CategoryPage.vue'
import SearchPage from '@/views/search/SearchPage.vue'
import SearchResult from '@/views/search/content/SearchResult.vue'
import ResetPasswordPage from '@/views/reset_password/ResetPasswordPage.vue'
import NewPasswordCard from '@/views/reset_password/content/NewPasswordCard.vue'
import AddSuggestion from '@/views/suggestions/content/AddSuggestion.vue'
import admin from '@/router/middleware/admin'

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
        admin
      ]
    }
  },
  {
    path: '/books/:id',
    name: 'BookPage',
    component: BookPage
  },
  {
    path: '/email-confirmation',
    name: 'EmailConfirmationPage',
    component: EmailConfirmationPage,
    meta: {
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/author/:id',
    name: 'AuthorPage',
    component: AuthorPage
  },
  {
    path: '/category/:id',
    name: 'CategoryPage',
    component: CategoryPage
  },
  {
    path: '/search/:input',
    name: 'SearchPage',
    component: SearchPage
  },
  {
    path: '/search-result',
    name: 'SearchResult',
    component: SearchResult
  },
  {
    path: '/reset-password',
    name: 'ResetPasswordPage',
    component: ResetPasswordPage,
    meta: {
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/new-password',
    name: 'NewPasswordCard',
    component: NewPasswordCard,
    meta: {
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/add-suggestion',
    name: 'AddSuggestion',
    component: AddSuggestion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next): void => {
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
