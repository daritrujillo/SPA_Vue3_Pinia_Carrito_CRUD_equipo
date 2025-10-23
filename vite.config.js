import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 👇 El nombre debe coincidir exactamente con tu repositorio en GitHub
export default defineConfig({
  plugins: [vue()],
  base: '/SPA_Vue3_Pinia_Carrito_CRUD_equipo/',
})

