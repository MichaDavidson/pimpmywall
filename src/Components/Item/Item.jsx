import React from 'react'
import { Image, Button, Box, Spacer } from '@chakra-ui/react'
import '../Item/Item.css'
const Item = ({producto}) => {
    return (
      <Box p="1rem" m="1.5rem" border="0.1rem solid #9d8189" display="flex" flexDir="column" alignItems="center">
        <Image src={producto.imagen} w="20rem" h="22rem"/>
        <div className="producto-titulo">{producto.producto}</div>
        <div className="producto-precio">${producto.precio}</div>
        <Button className="producto-boton">Ver más</Button>
        <Spacer />
      </Box>
  )
}

export default Item