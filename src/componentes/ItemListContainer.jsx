import ItemList from './ItemList' 
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const { categoria } = useParams()

  console.log(categoria)

  const productos = [
    { id: 1, nombre: "Producto A", precio: "5000", descripcion: "Descripcion de producto A", categoria: "A"},
    { id: 2, nombre: "Producto B", precio: "5000", descripcion: "Descripcion de producto B", categoria: "A"},
    { id: 3, nombre: "Producto C", precio: "5000", descripcion: "Descripcion de producto C", categoria: "B"},
    { id: 4, nombre: "Producto D", precio: "5000", descripcion: "Descripcion de producto D", categoria: "B"},
  ]
  
  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
        setTimeout(() => {
          resolve(productos)
        }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getProductos
    .then((res) => {
    })
    .catch((error) => {
      console.log(error)
    })
  
  const filteredProducts = productos.filter((producto) => producto.categoria === categoria)
  return (
    <>
      <h1>Bienvenidos</h1>
      {
        categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />
      }

    </>
  )
}

export default ItemListContainer