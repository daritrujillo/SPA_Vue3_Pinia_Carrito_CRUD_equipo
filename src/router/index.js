import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductosView from '../views/ProductosView.vue'
import ProductoFormView from '../views/ProductoFormView.vue'
import CarritoView from '../views/CarritoView.vue'
import ResumenView from '../views/ResumenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/productos', name: 'productos', component: ProductosView },
    { path: '/productos/crear', name: 'crear', component: ProductoFormView, props: { modo: 'crear' } },
    { path: '/productos/:id', name: 'editar', component: ProductoFormView, props: route => ({ id: route.params.id, modo: 'editar' }) },
    { path: '/carrito', name: 'carrito', component: CarritoView },
    { path: '/resumen', name: 'resumen', component: ResumenView },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
