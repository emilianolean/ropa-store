import React from 'react'
import ItemDetail from './ItemDetail';
import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const { id } = useParams()
    const [product, setProduct] = useState([])
    console.log(product)

    useEffect(() => {
      const db = getFirestore()
      
      const oneItem = doc(db, "ropa", `${id}`)
      getDoc(oneItem).then((snapshot)=>{
      if(snapshot.exists()){
      const docs = snapshot.data()
      setProduct({id, ...docs})
      }
      })
      },[id])

  return (
    <>
      <ItemDetail 
        producto={product}
      />
    </>
  )
}

export default ItemDetailContainer