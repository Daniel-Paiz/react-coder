import SantaCruzVerde from "../TablasImagen/SantaCruz-verde.jpg";
import SantaCruzMarron from "../TablasImagen/SantaCruz-marron.jpg";
import CleaverGrafitti from "../TablasImagen/cleaver-fran.jpg";
import CleaverNegraYrosa from "../TablasImagen/cleaver-negraYrosa.jpg";
import MiltonMartinez from "../TablasImagen/creature-MiltonMartinez.jpg";
import TablaBasica from "../TablasImagen/creature-basica.jpg";

const tablas = [
    {
        id: 1,
        type: "tabla",
        nombre: "santa cruz verde",
        stock: 15,
        price: 16000,
        imagen: SantaCruzVerde
    },
    {
        id: 2,
        type: "tabla",
        nombre: "santa cruz marron",
        stock: 10,
        price: 16000,
        imagen: SantaCruzMarron
    },
    {
        id: 3,
        type: "tabla",
        nombre: "cleaver grafitti",
        stock: 5,
        price: 12000,
        imagen: CleaverGrafitti
    },
    {
        id: 4,
        type: "tabla",
        nombre: "cleaver negra y rosa",
        stock: 13,
        price: 12000,
        imagen: CleaverNegraYrosa
    },
    {
        id: 5,
        type: "tabla",
        nombre: "milton martinez",
        stock: 5,
        price: 18000,
        imagen: MiltonMartinez
    },
    {
        id: 6,
        type: "tabla",
        nombre: "tabla basica",
        stock: 19,
        price: 15000,
        imagen: TablaBasica
    }
]

export default tablas;
