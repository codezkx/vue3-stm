declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component;
}
/* 
  声明函数类型
*/
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
