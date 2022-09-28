import React from "react"
import logo from "../img/logo_skate.png"
import "./NavBar.css"
import CartWidget from "../Componentes/CartWidget"
import { Link, } from "react-router-dom"
const headers = [
    { id: 0, name: 'tablas', ruta: '/header/tablas' },
    { id: 1, name: 'trucks', ruta: '/Trucks/trucks' },
    { id: 2, name: 'accesorios', ruta: '/header/accesorios' },
    { id: 3, name: 'contacto', ruta: '/header/contacto' },
];

const NavBar = () => {
    return (
        <body class="body">
            <header>
                <img src={logo} alt="logo" />
                <h1 class="titulo__h1">skate shop</h1>
                <nav>
                    {headers.map(header => <Link key={header.id} to={header.ruta}>{header.name}</Link>)}
                    <Link to='/Carrito'>
                        <CartWidget />
                    </Link>
                </nav>
            </header>
        </body>
    )
}
export default NavBar