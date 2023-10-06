import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer"
import NavBar from "./componentes/NavBar"
import Cart from "./componentes/Cart"
import Form from "./componentes/Form"
import ShoppingCartContext from "./context/ShoppingCartContext"
import ShoppingCartProvider from "./context/ShoppingCartContext"

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/' element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path='/Form' element={<Form />} />
        </Routes>
    </BrowserRouter>
    </ShoppingCartProvider>
    
    
  )
}

export default App