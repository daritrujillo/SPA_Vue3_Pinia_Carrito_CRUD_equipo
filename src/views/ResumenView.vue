<template>
  <section class="max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">Resumen del Pedido</h2>
    <div v-if="carrito.length" class="space-y-3">
      <div class="card overflow-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="text-left border-b">
              <th class="py-2">Producto</th>
              <th class="py-2">Cantidad</th>
              <th class="py-2">Precio</th>
              <th class="py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carrito" :key="item.id" class="border-b last:border-0">
              <td class="py-2">{{ item.nombre }}</td>
              <td class="py-2">{{ item.cantidad }}</td>
              <td class="py-2">$ {{ item.precio.toLocaleString('es-MX') }}</td>
              <td class="py-2">$ {{ (item.precio * item.cantidad).toLocaleString('es-MX') }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-600">Artículos: <span class="font-semibold">{{ totalArticulos }}</span></p>
          <p class="text-sm text-gray-600">Total: <span class="font-semibold">$ {{ totalPrecio.toLocaleString('es-MX') }}</span></p>
        </div>
        <button class="btn-primary" @click="confirmar">Confirmar pedido</button>
      </div>
    </div>
    <div v-else class="card text-center text-gray-500">No hay nada para mostrar. Ve al <RouterLink class="text-brand underline" to="/productos">listado de productos</RouterLink>.</div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCarritoStore } from '../stores/useCarritoStore'

const carritoStore = useCarritoStore()
const { carrito, totalArticulos, totalPrecio } = storeToRefs(carritoStore)

const confirmar = () => {
  alert('Pedido confirmado (demo). ¡Gracias!')
  carritoStore.vaciarCarrito()
}
</script>
