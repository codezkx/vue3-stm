import type { RouteRecordRaw } from 'vue-router'
import {
  Login
} from './components'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {}
  }
]

export default routes
