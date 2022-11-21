import { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();

export const setupStore = (app: App) => {
  app.use(store)
}

export { store }
