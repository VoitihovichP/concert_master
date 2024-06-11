import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      Configs: fileURLToPath(new URL('./src/configs', import.meta.url)),
      Components: fileURLToPath(new URL('./src/components', import.meta.url)),
      Modules: fileURLToPath(new URL('./src/modules', import.meta.url)),
      Pages: fileURLToPath(new URL('./src/pages', import.meta.url))
    }
  }
})
