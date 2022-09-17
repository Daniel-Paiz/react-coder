import React from "react"
import logo from "../img/logo_skate.png"
import "./NavBar.css"
import CartWidget from "../Componentes/CartWidget"
const headers = [
    { id: 0, name: 'tablas', href: '' },
    { id: 1, name: 'trucks', href: '' },
    { id: 2, name: 'accesorios', href: '' },
    { id: 3, name: 'contacto', href: '' },
];

const NavBar = () => {
    return (
        <body class="body">
            <header>
                <img src={logo} alt="logo" />
                <h1 class="titulo__h1">skate shop</h1>
                <nav>
                    {headers.map(header => <a key={header.id} href={header.href}>{header.name}</a>)}
                    <CartWidget />
                </nav>
            </header>
        </body>
    )
}
export default NavBar