import React from "react";
import ItemDetailContainerTrucks from "./Trucks/Trucks.js";
import { useParams } from "react-router-dom"




const ItemDetailContainer = () => {
    let { IdTruck } = useParams();

    return (
            <ItemDetailContainerTrucks />
    );
}
export default ItemDetailContainer;
