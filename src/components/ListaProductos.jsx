// Importamos los productos y la acción para agregarlos al carrito.
import { productos } from '../data/productos.js'
import { useCarritoStore } from '../store/useCarritoStore.js'

function ListaProductos() {
  // Del store solo necesitamos la acción para agregar productos.
  const agregarProducto = useCarritoStore((state) => state.agregarProducto)

  return (
    // Mostramos una fila por cada producto.
    <section className="panel productos" aria-label="Catálogo de productos">
      <h2>Productos</h2>
      {productos.map((producto) => (
        <div className="fila producto" key={producto.id}>
          <div>
            <p className="fila-nombre">{producto.nombre}</p>
            <p className="fila-detalle">
              ${producto.precio.toLocaleString('es-CO')}
            </p>
          </div>
          <button
            className="btn btn-primario"
            onClick={() => agregarProducto(producto)}
          >
            Agregar
          </button>
        </div>
      ))}
    </section>
  )
}

export default ListaProductos
