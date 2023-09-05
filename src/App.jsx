import ItemCount from "./componentes/ItemCount"
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer"
import NavBar from "./componentes/NavBar"

const App = () => {


  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer/>
      <ItemCount/>
    </>
  )
}

export default App
