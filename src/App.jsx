import Saludo from './components/Saludo'
import Producto from './components/Producto'
import Contador from './components/Contador'

{/*Comentarios */}

function App() {
  return(
    <div>
      <h1>Miprimera aplicacion</h1>
      <Saludo />
      <h1>Comprando productos</h1>
      <h2>Tienda React</h2>
      <Producto 
        nombre = "Lenovo laptop"
        precio = "$700.000"
      />
      <Contador />
    </div>
  )
}

export default App
