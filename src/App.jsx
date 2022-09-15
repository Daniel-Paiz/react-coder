import './App.css';
import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";
import Itemcount from "./Componentes/ItemCount";
const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      {/* <Itemcount stock={10} /> */}
    </>
  )
}

export default App;
