import React, {useState, useEffect} from "react";

const Base = () => {

    const  [nombre, setNombre] = useState('Pedro')
    useEffect(() => {
        setTimeout(() => {
            setNombre('Chema')
        }, 2000)
    })

    return (
        <div>
            <h1>Página de Base Ruta /</h1>
            {nombre}
        </div>
    )
}

export default Base