<template>
  <section class="grid md:grid-cols-2 gap-6 items-center">
    <div>
      <h1 class="text-3xl md:text-4xl font-extrabold leading-tight">
        CRUD de Productos con <span class="text-brand">Vue 3</span>, <span class="text-brand">Pinia</span> y <span class="text-brand">Vue Router</span>
      </h1>
      <p class="mt-4 text-gray-600">
        Agrega, edita, elimina y administra productos. Usa el carrito para simular un pedido y revisa el resumen antes de “comprar”.
      </p>
      <div class="mt-6 flex gap-3">
        <RouterLink to="/productos" class="btn-primary">Ver Productos</RouterLink>
        <RouterLink to="/productos/crear" class="btn-secondary">Crear Producto</RouterLink>
      </div>

      <div class="mt-8 card">
        <p class="font-semibold">Integrantes del equipo</p>
        <ul class="list-disc pl-6 mt-2">
          <li>Darinel Roblero Trujillo</li>
          <li>Maria Fernanda Estrada Gutiérrez</li>
          <li>Moisés Cruz Damián</li>
        </ul>
      </div>
    </div>
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSLMwuVasg1rWpVB39FdqLNdU7R0m4ZculA&s" alt="Banner" class="rounded-xl w-full h-auto">
      
    </div>
  </section>
</template>
