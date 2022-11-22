import { defineStore } from 'pinia'
import { store } from '@/store'

interface CookieInfo<T> {
  userName: T,
  password: T,
  rememberm: T,
}

type MultipleCookieState<T> = {
  [key: string]: CookieInfo<T>,
}

export const useMultipleCookieStore = defineStore({
  id: 'app-multiple-cookie',
  state: (): MultipleCookieState<string> => ({
    cookieInfo: {
      userName: '',
      password: '',
      rememberm: '',
    },
  }),
  actions: {
    updateCookie(cookie: string | Map<string, string>) {
      const _this = this
      if (cookie instanceof Map) {
        for (const k in _this.cookieInfo) {
          if (Object.hasOwn(_this.cookieInfo, k)) {
            _this.cookieInfo[k as keyof typeof _this.cookieInfo] = cookie.get(k) as string
          }
        }
      }
    }
  }
})

// 需要在 setup 之外使用
export function useMultipleCookieWithoutStore() {
  return useMultipleCookieStore(store)
}

