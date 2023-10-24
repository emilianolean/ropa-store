import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Tbody
} from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import { useContext, React } from 'react'
import { ShoppingCartContext } from "./context/ShoppingCartContext"; 

const TableCart = () => {
  const { cart, clearCart, removeItem, total, TotalQuantity } = useContext(ShoppingCartContext);

  if (cart.length === 0) {
      return (
          <div className='contenedorNoProducts'>
          <h1 className='tituloNoProducts'>CUIDADO</h1>
          <h2>No hay productos en el carrito</h2>
          </div>
      )
  }

   

return (
  <div className="mainCartEntero">
  <div className="cartMain">
    <TableContainer width='100%'>
      <Table variant="simple">
        <Tr>
          <Th width='20%' borderColor='black'>Producto</Th>
          <Th width='20%' borderColor='black' isNumeric>Precio</Th>
          <Th width='20%' borderColor='black' isNumeric>Cantidad</Th>
          <Th width='20%' borderColor='black' isNumeric>Total</Th>
          <Th width='20%' borderColor='black' >Eliminar</Th>
        </Tr>
      </Table>
    </TableContainer>
    {cart.map((producto) => (
      <TableContainer width='100%' key={producto.id}>
        <Table variant="simple">
          <Thead></Thead>
          <Tbody>
            <Tr>
              <Td width='20%' borderColor='black' isNumeric>{producto.nombre}</Td>
              <Td width='20%' borderColor='black' isNumeric>${producto.precio}</Td>
              <Td width='20%' borderColor='black' isNumeric>{producto.quantity}</Td>
              <Td width='20%' borderColor='black' isNumeric>${producto.precio * producto.quantity}</Td>
              <Td width='20%' borderColor='black'>
                <button
                  className="eliminarProducto btn btn-danger"
                  onClick={() => removeItem(producto.id)}
                >
                  X
                </button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    ))}
    <TableContainer width='100%'>
      <Table variant="simple">
        <Tr>
          <Th width='20%' borderColor='black'></Th>
          <Th width='20%' borderColor='black' isNumeric></Th>
          <Th width='20%' borderColor='black' fontSize='bold' color='black' isNumeric>{TotalQuantity}</Th>
          <Th width='20%' borderColor='black' fontSize='bold' color='black' isNumeric>{total}</Th>
          <Th width='20%' borderColor='black' fontSize='large' color='black'><button className="eliminarCarrito btn btn-danger" onClick={clearCart}>Borrar todo</button></Th>
        </Tr>
      </Table>
    </TableContainer>
  </div>
  <button className="finalizarCompra">
    <Link className="btn btn-success" to={`/form`}>Finalizar compra</Link>
  </button>
  </div>   
);
};

export default TableCart