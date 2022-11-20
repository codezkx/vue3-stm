import { createApp } from 'vue'
// element UI导入
import { globalRegister } from '@/global/index'
import router from './router'
import App from './App.vue'
import install from '@/plugin/common'
import './assets/style/index.scss'

const app = createApp(App)

install(app)

app.use(globalRegister)
app.use(router)

app.mount('#app')
