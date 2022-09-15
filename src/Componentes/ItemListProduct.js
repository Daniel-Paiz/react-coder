import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import SantaCruzVerde from "./TablasImagen/SantaCruz-verde.jpg";
import SantaCruzmarron from "./TablasImagen/SantaCruz-marron.jpg";
import CleaverGrafitti from "./TablasImagen/cleaver-fran.jpg";
import CleaverNegraYrosa from "./TablasImagen/cleaver-negraYrosa.jpg";
import MiltonMartinez from "./TablasImagen/creature-MiltonMartinez.jpg";
import TablaBasica from "./TablasImagen/creature-basica.jpg";
import Tablas from "./Tablas/tablas.js";
const productos = Tablas
console.log(product);

function BasicExample() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={SantaCruzVerde} />
                <Card.Body>
                    <Card.Title>santa cruz verde</Card.Title>
                    <Button variant="primary">añadir al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={SantaCruzmarron} />
                <Card.Body>
                    <Card.Title>santa cruz marron</Card.Title>
                    <Button variant="primary">añadir al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={CleaverGrafitti} />
                <Card.Body>
                    <Card.Title>cleaver grafitti</Card.Title>
                    <Button variant="primary">añadir al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={CleaverNegraYrosa} />
                <Card.Body>
                    <Card.Title>cleaver negra y rosa</Card.Title>
                    <Button variant="primary">añadir al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={MiltonMartinez} />
                <Card.Body>
                    <Card.Title>milton martinez</Card.Title>
                    <Button variant="primary">añadir al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={TablaBasica} />
                <Card.Body>
                    <Card.Title>tabla basica</Card.Title>
                    <Button variant="primary">añadir al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BasicExample;