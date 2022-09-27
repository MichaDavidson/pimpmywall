import React, { useState } from 'react'
import { Box, Image } from '@chakra-ui/react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount' 
import FinalizarCompra from '../FinalizarCompra/FinalizarCompra'

const ItemDetail = ({listProduct}) => {
  
    const stock = listProduct.stock;
    const initial = 1;

    const [compra, setCompra ] = useState(false);

    const onAdd = (contador) => {
      setCompra(true);
      console.log(`Agregaste ${contador} al carrito!`);
    };


  return (
    <Box className="box">
      <Image src={listProduct.imagen} w="20rem" h="22rem"/>
      <p className='producto-titulo'>{listProduct.producto}</p>
      <p className='producto-precio'>${listProduct.precio}</p>
      <p className='texto'>{listProduct.descripcion}</p>
      {compra ? <ItemCount stock={stock} initial={initial} onAdd={onAdd}/> : <FinalizarCompra compra={compra}/>}
    </Box>
  )
}

export default ItemDetail