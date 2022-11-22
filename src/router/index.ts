import type { App, RouteLocationNormalized } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useMultipleCookieStore } from 'pinia'
import { getCookie } from '@/utils/cookie'
  

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局守卫
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  console.log(to, 'to')
  console.log(from, 'from')
  hasCookie()
  // return false
})

const hasCookie = () => {
  const cookieMap = getCookie(['userName', 'password', 'rememberm'])
  if (cookieMap) {

  }
}

export const setupRouter = (app: App) => {
  app.use(router)
}

export { router }

