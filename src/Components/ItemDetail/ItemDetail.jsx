import React from 'react'
import { Box, Image } from '@chakra-ui/react'

const ItemDetail = ({listProduct}) => {
  
  return (
    <Box p="1rem" m="1.5rem" border="0.1rem solid #9d8189" display="flex" flexDir="column" alignItems="center">
      <Image src={listProduct.imagen} w="20rem" h="22rem"/>
      <p>{listProduct.producto}</p>
      <p>{listProduct.precio}</p>
      <p>{listProduct.descripcion}</p>
    </Box>
  )
}

export default ItemDetail