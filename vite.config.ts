import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { createVitePlugins } from './build/vite/plugin'
import ElementPlus from 'unplugin-element-plus/vite'
import defineOptions from 'unplugin-vue-define-options/vite'

const pathResolve = (dirPath) => path.resolve(__dirname, dirPath)

export default ({ command }) => {
  const isBuild = command === 'build' // command = serve or build
  return defineConfig({
    plugins: [vue(), createVitePlugins({}, isBuild), ElementPlus, defineOptions()],
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: `/${pathResolve('src')}/`
        }
      ]
    },
    server: {
      port: 3000,
      open: true,
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    }
  })
}
