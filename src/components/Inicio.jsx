import React from "react";
import {useParams} from 'react-router-dom'

const Inicio = () => {

    const {id, nombre, edad} = useParams()

    return (
        <div>
            <h1>Página de Inicio</h1>
            <p>{id}</p>
            <p>{nombre}</p>
            <p>{edad}</p>
        </div>
    )
}

export default Inicio