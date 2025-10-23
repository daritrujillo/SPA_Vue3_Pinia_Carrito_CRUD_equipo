<template>
  <section>
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold">Productos</h2>
      <RouterLink to="/productos/crear" class="btn-primary">Nuevo producto</RouterLink>
    </div>

    <div v-if="productos.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        v-for="p in productos"
        :key="p.id"
        :producto="p"
        @agregar="agregarAlCarrito"
        @eliminar="eliminarProducto"
      />
    </div>
    <div v-else class="card text-center text-gray-500">No hay productos. Crea el primero.</div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProductoStore } from '../stores/useProductoStore'
import { useCarritoStore } from '../stores/useCarritoStore'
import ProductCard from '../components/ProductCard.vue'

const productosStore = useProductoStore()
const carritoStore = useCarritoStore()

const { productos } = storeToRefs(productosStore)

const agregarAlCarrito = (producto) => {
  carritoStore.agregarAlCarrito(producto)
}

const eliminarProducto = (id) => {
  if (confirm('¿Eliminar producto?')) {
    productosStore.eliminarProducto(id)
  }
}
</script>
