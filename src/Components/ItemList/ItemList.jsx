import { VStack } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({listaProductos}) => {

  return (
    <VStack>
        {listaProductos.map(producto => <Item key={`${producto.producto}-${producto.id}`} producto={producto}/>)}
    </VStack>
  )
}

export default ItemList