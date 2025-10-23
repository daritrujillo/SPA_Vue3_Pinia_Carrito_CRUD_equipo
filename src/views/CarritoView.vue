<template>
  <section class="max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">Carrito</h2>

    <div v-if="carrito.length" class="space-y-3">
      <div v-for="item in carrito" :key="item.id" class="card flex items-center justify-between">
        <div>
          <p class="font-semibold">{{ item.nombre }}</p>
          <p class="text-sm text-gray-500">Cantidad: {{ item.cantidad }} — $ {{ (item.precio * item.cantidad).toLocaleString('es-MX') }}</p>
        </div>
        <div class="flex gap-2">
          <button class="btn-secondary" @click="eliminar(item.id)">Eliminar</button>
        </div>
      </div>

      <div class="card flex items-center justify-between">
        <p class="font-semibold">Total artículos: {{ totalArticulos }}</p>
        <p class="font-bold">Total a pagar: $ {{ totalPrecio.toLocaleString('es-MX') }}</p>
      </div>

      <div class="flex gap-3">
        <RouterLink to="/resumen" class="btn-primary">Ir a Resumen</RouterLink>
        <button class="btn-secondary" @click="vaciar">Vaciar carrito</button>
      </div>
    </div>

    <div v-else class="card text-center text-gray-500">Tu carrito está vacío.</div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCarritoStore } from '../stores/useCarritoStore'

const carritoStore = useCarritoStore()
const { carrito, totalArticulos, totalPrecio } = storeToRefs(carritoStore)

const eliminar = (id) => carritoStore.eliminarDelCarrito(id)
const vaciar = () => carritoStore.vaciarCarrito()
</script>
