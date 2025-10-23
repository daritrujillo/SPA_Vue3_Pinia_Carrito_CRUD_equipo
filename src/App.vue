<template>
  <div>
    <header class="bg-white shadow sticky top-0 z-20">
      <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-2 font-semibold text-lg">
          <span class="w-3 h-3 rounded-full bg-brand"></span>
          SPA Productos
        </RouterLink>

        <ul class="flex items-center gap-3 text-sm">
          <li><RouterLink class="px-3 py-2 rounded-xl hover:bg-gray-100" to="/">Inicio</RouterLink></li>
          <li><RouterLink class="px-3 py-2 rounded-xl hover:bg-gray-100" to="/productos">Productos</RouterLink></li>
          <li><RouterLink class="px-3 py-2 rounded-xl hover:bg-gray-100" to="/productos/crear">Crear</RouterLink></li>
          <li>
            <RouterLink class="px-3 py-2 rounded-xl hover:bg-gray-100" to="/carrito">
              Carrito <span class="ml-1 text-xs text-white bg-brand px-2 py-1 rounded-full">{{ totalArticulos }}</span>
            </RouterLink>
          </li>
          <li><RouterLink class="px-3 py-2 rounded-xl hover:bg-gray-100" to="/resumen">Resumen</RouterLink></li>
        </ul>
      </nav>
    </header>

    <main class="max-w-6xl mx-auto p-4">
      <RouterView />
    </main>

    <footer class="border-t mt-10 py-6 text-center text-sm bg-white">
      <p class="font-semibold">Equipo:</p>
      <p>Darinel Roblero Trujillo · Maria Fernanda Estrada Gutiérrez · Moisés Cruz Damián</p>
      <p class="text-gray-500 mt-2">SPA Vue 3 + Pinia + Router — GitHub Pages</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCarritoStore } from './stores/useCarritoStore'

const carrito = useCarritoStore()
const { totalArticulos } = storeToRefs(carrito)
</script>
