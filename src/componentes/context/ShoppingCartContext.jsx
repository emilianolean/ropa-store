import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const ShoppingCartContext = createContext({
  cart: [] });

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, {...item, quantity }]);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El producto ya fue seleccionado!'
      })
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((producto) => producto.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Cuidado',
      text: "Esta por eliminar todos los productos del carrito",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminados',
          'Se eliminaron todos los productos del carrito',
          'success'
        )
        setCart([]);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tus productos se mantienen en el carrito',
          'error'
        )
      }
    })
  };

  const isInCart = (itemId) => {
    return cart.some((producto) => producto.id === itemId);
  };

  const total = cart.reduce((total, item) => total + (item.precio * item.quantity), 0);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <>
      <ShoppingCartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
        { children }
      </ShoppingCartContext.Provider>
    </>
  );
};

export default ShoppingCartProvider