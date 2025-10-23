<template>
  <div class="card">
    <img :src="producto.imagen" :alt="producto.nombre" class="w-full h-40 object-cover rounded-xl mb-3">
    <div class="flex items-start justify-between gap-3">
      <div>
        <h3 class="font-semibold text-lg">{{ producto.nombre }}</h3>
        <p class="text-sm text-gray-500">{{ producto.descripcion }}</p>
        <p class="mt-2 font-bold">$ {{ producto.precio.toLocaleString('es-MX') }}</p>
        <p class="text-xs text-gray-500">Stock: {{ producto.stock }}</p>
      </div>
    </div>
    <div class="mt-3 flex gap-2 flex-wrap">
      <RouterLink class="btn-secondary" :to="`/productos/${producto.id}`">Editar</RouterLink>
      <button class="btn-secondary" @click="$emit('eliminar', producto.id)">Eliminar</button>
      <button class="btn-primary" @click="$emit('agregar', producto)">Agregar al carrito</button>
    </div>
  </div>
</template>

<script setup>
defineProps({ producto: { type: Object, required: true } })
</script>
