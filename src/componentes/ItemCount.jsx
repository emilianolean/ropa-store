import React, {useContext, useState} from 'react'
import { ShoppingCartContext } from "./context/ShoppingCartContext";
import Swal from 'sweetalert2';
import { ButtonGroup, Button } from '@chakra-ui/react';

const ItemCount = ({ id, nombre, precio }) => {
  const [contador, setContador] = useState(0);

  const handleDecrement = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleIncrement = () => {
    setContador(contador + 1);
  };
  
    const { addItem } = useContext(ShoppingCartContext);
    
    const handleOnAdd = () => {
      if (contador !== 0) {
        const item = {
          id,
          nombre,
          precio,
        };
        addItem(item, contador);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'ERROR...',
          text: 'Usted no selecciono un producto!'      
        })
      }
    };

  return (
    <>
      <ButtonGroup spacing="6">
        <div className="itemContador d-flex">
          <button className="buttonCont btn btn-primary" onClick={handleIncrement}>
            {" "}
            +{" "}
          </button>
          <p className="numCont btn btn-light">{contador}</p>
          <button className="buttonCont btn btn-primary" onClick={handleDecrement}>
            {" "}
            -{" "}
          </button>
        </div>
        <Button
          variant="solid"
          background="blue.600"
          color="white"
          onClick={handleOnAdd}>
          Agregar a carrito
        </Button>
      </ButtonGroup>
    </>
  )
}

export default ItemCount