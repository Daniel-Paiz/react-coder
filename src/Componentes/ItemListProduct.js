import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import tablas from "./Tablas/tablas.js";
import "./ItemListProduct.css";

function BasicExample() {
    return (
        <section class="cards_item" >
            {tablas.map((tabla) => (<Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tabla.imagen} />
                <Card.Body>
                    <Card.Title>{tabla.nombre}</Card.Title>
                    <Button variant="primary">Añadir al carrito</Button>
                </Card.Body>
            </Card>))}
            </section>
    );
}

export default BasicExample;