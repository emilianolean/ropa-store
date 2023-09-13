import React, {useState} from 'react'

const ItemCount = () => {
  const [contador, setContador] = useState(0)
    const sumar = () => {
      setContador(contador + 1)
    }
    const restar = () => {
      if(contador > 0){
        setContador(contador - 1)
      }
    }
    
  return (
    <>
    <div className='d-flex'>
      <div>
        <button variant='dark' onClick={sumar}>+
        </button>
        <p className='btn'>{contador}</p>
        <button variant='dark' onClick={restar}>-</button>
      </div>
    </div>
    </>
  )
}

export default ItemCount