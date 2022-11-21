import App from './App.vue'
import { createApp } from 'vue'
// element UI导入
import { globalRegister } from '@/global/index'
import { setupRouter } from './router'
import { setupStore } from './store'
import install from '@/plugin/common'
import './assets/style/index.scss'

const app = createApp(App)

setupRouter(app) // 配置router


setupStore(app) // 配置store

install(app) // 配置全局插件 和 组件

globalRegister(app) // 按需导入element ui

app.mount('#app')
