// Importamos el store para leer y modificar el carrito.
import { useCarritoStore } from '../store/useCarritoStore.js'

function Carrito() {
  // Obtenemos los productos y las acciones que usaremos.
  const items = useCarritoStore((state) => state.items)
  const eliminarProducto = useCarritoStore((state) => state.eliminarProducto)
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito)

  // Sumamos el precio de cada producto según su cantidad.
  const total = items.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0
  )

  // Si no hay productos, mostramos un mensaje y terminamos aquí.
  if (items.length === 0) {
    return (
      <section className="panel">
        <h2>Carrito</h2>
        <p className="vacio">Tu carrito está vacío.</p>
      </section>
    )
  }

  return (
    <section className="panel">
      <h2>Carrito</h2>

      {/* Mostramos una fila por cada producto agregado. */}
      {items.map((item) => (
        <div className="fila" key={item.id}>
          <div>
            <p className="fila-nombre">{item.nombre}</p>
            <p className="fila-detalle">
              {item.cantidad} × ${item.precio.toLocaleString('es-CO')}
            </p>
          </div>
          <button
            className="btn btn-secundario"
            onClick={() => eliminarProducto(item.id)}
          >
            Quitar
          </button>
        </div>
      ))}

      {/* Mostramos el total a pagar. */}
      <div className="total">
        <span>Total</span>
        <strong>${total.toLocaleString('es-CO')}</strong>
      </div>

      {/* Al hacer clic, vaciamos todos los productos. */}
      <button
        className="btn btn-secundario btn-bloque"
        onClick={vaciarCarrito}
      >
        Vaciar carrito
      </button>
    </section>
  )
}

// Exportamos el componente para usarlo en App.
export default Carrito
