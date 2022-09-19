import React from 'react'
import { Box } from '@chakra-ui/react'

const ItemDetail = ({listProduct}) => {
  
  console.log(listProduct)
  return (
    <Box p="1rem" m="1.5rem" border="0.1rem solid #9d8189" display="flex" flexDir="column" alignItems="center">
      <div>{listProduct.imagen}</div>
      <p>{listProduct.producto}</p>
      <p>{listProduct.precio}</p>
      <p>{listProduct.descripcion}</p>
    </Box>
  )
}

export default ItemDetail