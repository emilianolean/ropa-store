import React from 'react'
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
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
      }else {
        reject(new Error("No hay datos"))
      }
    })

  getProductos
    .then((res) => {
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <>
      <ItemDetail 
        productos={productos} 
      />
    </>
  )
}

export default ItemDetailContainer