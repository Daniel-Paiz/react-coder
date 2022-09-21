import './App.css';
import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";
// import Itemcount from "./Componentes/ItemCount";
import ItemDetailContainer from './Componentes/ItemDetailContainer';
const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      {/* <Itemcount /> */}
    </>
  )
}

export default App;
