// import { useState } from "react";
// import Swal from 'sweetalert2';
// import "./ItemCount.css";

// const Itemcount = ({ stock }) => {
//     const [contador, setcontador] = useState(0);
//     const sumar = () => {
//         setcontador(contador + 1);
//     }
//     const restar = () => {
//         setcontador(contador - 1);
//     }
//     const reset = () => {
//         setcontador(0);
//     }
//     const onAdd = () => {
//         const swalWithBootstrapButtons = Swal.mixin({
//             customClass: {
//                 confirmButton: 'btn btn-success',
//                 cancelButton: 'btn btn-danger'
//             },
//             buttonsStyling: false
//         })

//         swalWithBootstrapButtons.fire({
//             title: 'estas seguro/a?',
//             text: "una vez confirmada la compra sola tendras 24 hs para cancelar ",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'si estoy seguro/a!',
//             cancelButtonText: 'cancelar',
//             reverseButtons: true
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 swalWithBootstrapButtons.fire(
//                     'confirmado !',
//                     'muchas gracias por la compra.',
//                     'success'
//                 )
//             } else if (
//                 result.dismiss === Swal.DismissReason.cancel
//             ) {
//                 swalWithBootstrapButtons.fire(
//                     ':´(',
//                     'cancelado',
//                     'error'
//                 )
//             }
//         })
//     }
//     return (
//         <>
//             <div class="titulo__h1">carrito</div>
//             <h1 class="titulo__h1">{contador}</h1>
//             <div class="div_botones">
//                 <button class="botones_carrito" onClick={sumar}>Sumar producto</button>
//                 <button class="botones_carrito" onClick={restar}>Restar producto</button>
//                 <button class="botones_carrito" onClick={reset}>Vaciar carrito</button>
//                 <button class="botones_carrito" onClick={onAdd}>comprar</button>
//             </div>
//         </>
//     )
// }
// export default Itemcount