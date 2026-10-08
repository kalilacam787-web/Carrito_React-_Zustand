import { create } from 'zustand'

// Store del carrito de compras
export const useCarrito = create((set) => ({
  // Estado inicial: lista de productos agregados
  items: [],

  // Agrega un producto al carrito
  agregarProducto: (producto) => {
    set((state) => {
      // Verifica si el producto ya existe en el carrito
      const existe = state.items.find((item) => item.id === producto.id)

      if (existe) {
        // Si ya existe, solo aumenta la cantidad
        return {
          items: state.items.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
        }
      }

      // Si no existe, lo agrega con cantidad 1
      return { items: [...state.items, { ...producto, cantidad: 1 }] }
    })
  },

  // Elimina un producto completo del carrito por su id
  eliminarProducto: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }))
  },

  // Vacía todo el carrito
  vaciarCarrito: () => set({ items: [] }),

})) // Fin del store


