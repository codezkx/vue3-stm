import { createApp } from 'vue'
import { globalRegister } from '@/global/index'
import router from './router'
import App from './App.vue'
import install from '@/plugin/common'
import './assets/style/index.scss'

const app = createApp(App)

install(app)

app.use()
app.use(router)
app.use(globalRegister)

app.mount('#app')
