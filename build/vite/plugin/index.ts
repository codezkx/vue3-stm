import type { Plugin } from 'vite'
import { configMockPlugin } from './mock-plugin'

export const createVitePlugins = (viteEnv: any, isBuild: boolean) => {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // add has to plugin
  ]

  // add mock plugin
  // vitePlugins.push(configMockPlugin(isBuild))
  return vitePlugins
}
