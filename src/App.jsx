import Saludo from './components/Saludo'
import Producto from './components/Producto'

{/*Comentarios */}

function app() {
  return(
    <div>
      <h1>Miprimera aplicacion</h1>
      <Saludo />
      <h1>Comprando productos</h1>
      <h2>Tienda React</h2>
      <Producto />
      <Producto />
      <Producto />
    </div>
  )
}

export default App
