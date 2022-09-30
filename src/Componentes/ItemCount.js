import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./ItemCount.css";

const Itemcount = ({ stock, onAdd }) => {
    const [contador, setcontador] = useState(0);
    const sumar = () => {
        if (stock > contador) {
            setcontador(contador + 1);
        }
    }
    const restar = () => {
        if (contador > 0) {
            setcontador(contador - 1);
        }
    }

    return (
        <>
            <div className="div_botones">
                <button className="botones_carrito" onClick={restar}>-</button>
                <h1 className="titulo__h1">{contador}</h1>
                <button className="botones_carrito" onClick={sumar}>+</button>
            </div>
            {contador === stock && <div className="error_sin_stock">
                Stock Agotado.
            </div>}
            <Button disabled={contador === 0} onClick={onAdd}  variant="primary">Añadir al carrito</Button>
        </>
    )
}
export default Itemcount