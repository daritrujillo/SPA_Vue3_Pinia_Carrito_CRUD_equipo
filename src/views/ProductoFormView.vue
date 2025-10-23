<template>
  <section class="max-w-2xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">{{ titulo }}</h2>
    <form @submit.prevent="onSubmit" class="card space-y-4">
      <div>
        <label class="block text-sm font-medium">Nombre</label>
        <input v-model="form.nombre" type="text" required class="mt-1 w-full rounded-xl border-gray-300">
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium">Precio (MXN)</label>
          <input v-model.number="form.precio" type="number" min="0" required class="mt-1 w-full rounded-xl border-gray-300">
        </div>
        <div>
          <label class="block text-sm font-medium">Stock</label>
          <input v-model.number="form.stock" type="number" min="0" required class="mt-1 w-full rounded-xl border-gray-300">
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium">Descripción</label>
        <textarea v-model="form.descripcion" rows="3" class="mt-1 w-full rounded-xl border-gray-300"></textarea>
      </div>
      <div>
        <label class="block text-sm font-medium">URL de imagen</label>
        <input v-model="form.imagen" type="url" placeholder="https://..." class="mt-1 w-full rounded-xl border-gray-300">
      </div>

      <div class="flex gap-3 pt-2">
        <button class="btn-primary" type="submit">{{ modo === 'crear' ? 'Crear' : 'Guardar cambios' }}</button>
        <RouterLink to="/productos" class="btn-secondary">Cancelar</RouterLink>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductoStore } from '../stores/useProductoStore'

const props = defineProps({
  id: { type: [String, Number], default: null },
  modo: { type: String, default: 'crear' }
})

const route = useRoute()
const router = useRouter()
const productos = useProductoStore()

const titulo = computed(() => props.modo === 'crear' ? 'Crear producto' : 'Editar producto')

const form = reactive({
  nombre: '',
  precio: 0,
  stock: 0,
  descripcion: '',
  imagen: ''
})

onMounted(() => {
  if (props.modo === 'editar') {
    const prod = productos.obtenerProductoPorId(props.id || route.params.id)
    if (prod) {
      Object.assign(form, prod)
    }
  }
})

const onSubmit = () => {
  if (props.modo === 'crear') {
    productos.crearProducto(form)
  } else {
    productos.actualizarProducto(props.id || route.params.id, form)
  }
  router.push('/productos')
}
</script>
