import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
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
    {
        product.map((p)=>{
            return(
                <ItemDetail product={p}/>
            )
        })
    }
    </>
  )
}

export default ItemDetailContainer