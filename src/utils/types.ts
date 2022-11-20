import { Plugin } from 'vue'
// cookie设置类型处理
export type CookieObjOption = {
  [key: string]: any
}

export type SFCWithInstall<T> = T & Plugin
