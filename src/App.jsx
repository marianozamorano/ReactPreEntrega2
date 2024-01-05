import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
//import CartWidget from './componentes/CartWidget/CartWidget';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element = {<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element = {<ItemListContainer/>} />
          <Route path="/item/:idItem" element = {<ItemDetailContainer/>} />
          <Route path="/cart" element={<h2> Sitio en Contruccion </h2>} />
        </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App