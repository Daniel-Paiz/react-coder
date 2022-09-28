import IndependentHollow from "../TruksImagen/IndependentNegroHollow.jpg";
import "../ItemListProduct.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Trucks = [
    {
        id: 7,
        type: "truck",
        nombre: "independent hollow",
        stock: 15,
        price: 3500,
        imagen: IndependentHollow,
    }
];
function ItemDetailContainerTrucks() {
    return (
        <section class="cards_item" >
            {Trucks.map((truck) => (<Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={truck.imagen} />
                <Card.Body>
                    <Card.Title>{truck.nombre}</Card.Title>
                    <Card.Text>
                        este truck es el mas vendido del año devido a su alta calidad , y duravilidad .
                    </Card.Text>
                    <Button variant="primary">Añadir al carrito</Button>
                </Card.Body>
            </Card>))}
        </section>
    )
}

export default ItemDetailContainerTrucks;
