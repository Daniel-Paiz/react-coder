import "./ItemListContainer.css"
import logo_skate_shop from "../img/Skate_shop.jpg"
import logo_tabla_skate_shop from "../img/Tabla_skate_shop.jpg"
import ItemListProduct from "./ItemListProduct"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    let { IdVistas } = useParams();
    return (
        <main>
            <h1 class="titulo__h1">CAMPANA SKATE SHOP</h1>
            <h2 class="h2__index"> Sean bienvenidos a nuetro sitio web , por el momento les ofrecemos un catalogo de los
                productos que disponemos en Stock
                aun estamos en desarollo , constultas que tengan pueden ir a contacto dejar sus datos y nos contactaremos a
                la brevedad gracias</h2>
            <div class="div__main">
                <img src={logo_skate_shop} alt="logo_skate_shop" class="imagen_ilustrativa" />
                <h3 class="caja__texto text-center">
                    Nos presentamos , somos un skate shop ubicado en campana buscamos lo mejor en precio
                    calidad
                    simpre serle fiel al cliente y dar soporte en cualquier ambiete relacionado a este deporte que tanto
                    amamos </h3>
                <img src={logo_tabla_skate_shop} alt="logo2" class="imagen_ilustrativa" />
                <h2 class="titulo__h1">Tablas</h2>
                    <ItemListProduct />
            </div>
        </main>
    )
}
export default ItemListContainer


