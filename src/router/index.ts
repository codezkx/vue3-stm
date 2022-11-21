import { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export const setupRouter = (app: App) => {
  app.use(router)
}

export { router }

