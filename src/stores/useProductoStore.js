import { defineStore } from 'pinia'

export const useProductoStore = defineStore('productos', {
  state: () => ({
    productos: [
      { id: 1, nombre: 'Laptop Pro 14"', precio: 23999, stock: 5, descripcion: 'Equipo potente para desarrollo.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45ow4XgxMJ1KCev6McJTaay0nP39YRF9oUg&s' },
      { id: 2, nombre: 'Audífonos Inalámbricos', precio: 1499, stock: 25, descripcion: 'Sonido claro y cómodo.', imagen: 'https://resources.sears.com.mx/medios-plazavip/mkt/63740141914c0_img_20221115_151321_-1080_x_1080_p-xel-jpg.jpg?scale=500&qlty=75' },
      { id: 3, nombre: 'Teclado Mecánico', precio: 1299, stock: 12, descripcion: 'Switches táctiles y RGB.', imagen: 'https://rog.asus.com/media/1686011020245.jpg' },
      { id: 4, nombre: 'Mouse Gamer', precio: 899, stock: 15, descripcion: 'Alta precisión y ergonomía.', imagen: 'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/2317339e9/mouse-usb-gamer-800-1600-2400-3200-4800-7200-dpi.jpg' },
      { id: 5, nombre: 'Monitor 27" 2K', precio: 5699, stock: 7, descripcion: 'Pantalla nítida para productividad.', imagen: 'https://i5.walmartimages.com/asr/34ea678d-b9ac-42bf-a983-f35076f79bde.6e32e9fe3ce59b318fca816bae8f8180.jpeg' },
    ]
  }),
  getters: {
    obtenerProductoPorId: (state) => (id) => state.productos.find(p => String(p.id) === String(id))
  },
  actions: {
    crearProducto(producto) {
      const nuevo = { ...producto }
      // generar id simple si no existe
      if (!nuevo.id) nuevo.id = Date.now()
      this.productos.push(nuevo)
    },
    actualizarProducto(id, producto) {
      const idx = this.productos.findIndex(p => String(p.id) === String(id))
      if (idx !== -1) {
        this.productos[idx] = { ...this.productos[idx], ...producto, id: this.productos[idx].id }
      }
    },
    eliminarProducto(id) {
      this.productos = this.productos.filter(p => String(p.id) !== String(id))
    }
  }
})
