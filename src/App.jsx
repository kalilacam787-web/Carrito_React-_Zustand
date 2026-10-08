import Encabezado from './components/Encabezado.jsx'
import ListaProductos from './components/ListaProductos.jsx'
import Carrito from './components/Carrito.jsx'

function App() {
  return (
    <div className="app">
      {/* Encabezado con el contador del carrito. */}
      <Encabezado />

      {/* Catálogo y carrito aparecen en dos columnas. */}
      <main className="contenido">
        <ListaProductos />
        <Carrito />
      </main>
    </div>
  )
}

export default App
