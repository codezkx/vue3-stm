import type { App } from 'vue';
import type {  RouteLocationNormalized } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
import { useMultipleCookieStore } from '@/store/modules/storeCookie';
import { getCookie } from '@/utils/cookie';


const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// 全局守卫
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  hasCookie();
  // return false
});

//
const hasCookie = (): void => {
  const cookieMap: Map<string, string> = getCookie(['userName', 'password', 'rememberm']);
  if (cookieMap) {
    const cookieO = useMultipleCookieStore();
    cookieO.updateCookie(cookieMap)
  };
};

export const setupRouter = (app: App) => {
  app.use(router);
};
export { router };

