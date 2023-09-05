import {useEffect, useState} from 'react'
import ItemList from './ItemList' 

const ItemListContainer = () => {
  
  const getProducts = async ()=>{
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    

    return data
  }

  const [product, setProduct]= useState([])
  
  
  useEffect(()=>{
    getProducts().then((product)=> setProduct(product))
  }, [])

  
  return (
    <>
      <ItemList product={product} />
    </>
  )
}

export default ItemListContainer