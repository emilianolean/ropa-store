import { createContext, useState } from "react"

export const CartContext = createContext({
  cart: []
})

const ShoppingCartProvider = ({children}) => {

  const [cart, setCart] = useState([])
  console.log(cart)

  const addItem = (item, quantity) => {
    if(!isInCart(item.id)) {
      setCart(prev => [...prev, {...item,quantity}])
    }else {
      console.error('El producto ya fue agregado')
    }
  }

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
  }
  
  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider