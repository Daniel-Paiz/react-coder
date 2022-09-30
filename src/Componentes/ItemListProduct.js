import React from "react";
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import tablas from "./Tablas/tablas.js";
import Itemcount from "./ItemCount";
import "./ItemListProduct.css";

function BasicExample() {

    const navigate = useNavigate(); 

    const onAdd = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Desea terminar la compra?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Terminar',
            cancelButtonText: 'Seguir comprando',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/Carrito');
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Producto agregado!',
                    'Podrá seguir agregando productos al carrito',
                    'success'
                )
            }
        })
    }

    return (
        <section className="cards_item" >
            {tablas.map((tabla) => (<Card style={{ width: '18rem', display: 'flex', alignItems: 'center' }}>
                <Card.Img variant="top" src={tabla.imagen} />
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card.Title>{tabla.nombre}</Card.Title>
                    <Card.Text>
                        Este truck es el mas vendido del año debido a su alta calidad y durabilidad.
                    </Card.Text>
                    <Itemcount onAdd={onAdd} stock={tabla.stock} />
                </Card.Body>
            </Card>))}
        </section>
    );
}

export default BasicExample;