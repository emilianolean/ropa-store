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
    <div className='d-grid gap-2'>
      <div>
        <button className='btn btn-primary' onClick={sumar}>+
        </button>
        <span className='btn btn-light'> {contador} </span>
        <button className='btn btn-primary' onClick={restar}>-</button>
          <div>
            <button className='btn btn-light' onClick={() => alert(`Cantidad agregada ${contador}`)}>
              Añadir al carrito
            </button>
          </div>
      </div>
    </div>
    </>
  )
}

export default ItemCount