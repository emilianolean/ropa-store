import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer"
import NavBar from "./componentes/NavBar"
import Cart from "./componentes/Cart"

const App = () => {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/' element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App