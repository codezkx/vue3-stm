import { App } from 'vue'
import componentPlugins  from './components'

const install = (app: App): void => {
  componentPlugins.forEach(c => {
    app.use(c)
  })
}

export default install
