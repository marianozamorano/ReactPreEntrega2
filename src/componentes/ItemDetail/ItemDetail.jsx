import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';



const ItemDetail = ({id, nombre, stock, precio,img}) => {
    //Creamos un estado local con la cantidad de productos agregados
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    //Creamos una funcion manejadora de la cantidad
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        console.log("Productos agregados: " + cantidad);
    }
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aliquam asperiores quisquam quaerat, omnis quidem accusamus esse? Aut provident excepturi molestiae ut voluptates blanditiis, veritatis quo! Obcaecati ab porro consequatur.</p>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail