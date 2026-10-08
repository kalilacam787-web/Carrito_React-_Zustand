// Usamos el carrito para mostrar cuántos productos hay.
import { useCarritoStore } from '../store/useCarritoStore.js'

function Encabezado() {
  // Leemos los productos del carrito.
  const items = useCarritoStore((state) => state.items)

  // Sumamos cuántas unidades hay.
  const totalUnidades = items.reduce((suma, item) => suma + item.cantidad, 0)

  return (
    <header className="encabezado">
      {/* Nombre de la tienda */}
      <h1>Mi Tienda</h1>
      {/* Cantidad total de unidades en el carrito */}
      <span className="insignia">🛒 {totalUnidades}</span>
    </header>
  )
}

// Exportamos el encabezado para usarlo en la app.
export default Encabezado
