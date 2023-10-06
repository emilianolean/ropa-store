import ItemList from './ItemList' 
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const ItemListContainer = () => {
  const { categoria } = useParams()
  const [products, setProducts] = useState([])
  console.log(products)


  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "ropa");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProducts(docs);
      })
  }, []);

  const filteredProducts = products.filter((producto) => producto.Categoria === categoria)
  console.log(categoria)
  return (
    <>
      <h2 className='text-center'>¡Bienvenidos a nuestra tienda de ropa!</h2>
      {
        categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={products} />
      }
    </>
  )
}

export default ItemListContainer