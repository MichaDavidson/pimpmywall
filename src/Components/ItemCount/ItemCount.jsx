import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const sumarProductos = () => contador < stock && setContador(contador + 1)
    
    const restarProductos = () => contador > initial && setContador(contador - 1)
  
    const agregarAlCarrito = () => {
        onAdd(contador);
        setContador(1);
    }

    return (
    <>
    <div>
        <Button disabled={contador === stock} onClick={sumarProductos}>+</Button>
        <div>{contador}</div>
        <Button disabled={contador === initial} onClick={restarProductos}>-</Button>
    </div>
    <Button onClick={agregarAlCarrito}>Me lo llevo!</Button>
    </>
  )
}

export default ItemCount
