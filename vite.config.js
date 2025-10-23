import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// IMPORTANT: Replace NOMBRE_DEL_REPO with your GitHub repo name before deploying to Pages.
export default defineConfig({
  plugins: [vue()],
  base: '/NOMBRE_DEL_REPO/'
})
