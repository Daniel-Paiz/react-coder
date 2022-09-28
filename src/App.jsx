import './App.css';
import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";
// import Itemcount from "./Componentes/ItemCount";
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './Componentes/Cart';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/header/:IdVistas' element={<ItemListContainer />} />
          <Route path='/Trucks/:IdTruck' element={<ItemDetailContainer />} />
          <Route path='/Carrito' element={<Cart />} />
          {/* <Itemcount /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
