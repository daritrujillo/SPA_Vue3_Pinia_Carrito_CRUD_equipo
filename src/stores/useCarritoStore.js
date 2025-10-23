import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    carrito: [] // [{ id, nombre, precio, cantidad }]
  }),
  getters: {
    totalArticulos: (state) => state.carrito.reduce((acc, item) => acc + item.cantidad, 0),
    totalPrecio: (state) => state.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  },
  actions: {
    agregarAlCarrito(producto) {
      const existente = this.carrito.find(p => p.id === producto.id)
      if (existente) {
        existente.cantidad += 1
      } else {
        this.carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 })
      }
    },
    eliminarDelCarrito(id) {
      this.carrito = this.carrito.filter(p => p.id !== id)
    },
    vaciarCarrito() {
      this.carrito = []
    }
  }
})
