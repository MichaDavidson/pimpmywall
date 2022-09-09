import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
  
    const [contador, setContador] = useState(1);

    const sumarProductos = () => {
            setContador(contador + 1);
    }

    const restarProductos = () => {
        setContador(contador - 1);
    }

    const agregarAlCarrito = () => {
        onAdd(contador);
        setContador(1);
    }

    return (
    <>
    <div>
        <button onClick={sumarProductos}>+</button>
        <div>{contador}</div>
        <button onClick={restarProductos}>-</button>
    </div>
    <button onClick={agregarAlCarrito}>Me lo llevo!</button>
    </>
  )
}

export default ItemCount
