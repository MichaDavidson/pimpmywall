import React from 'react'
import { Image, Button, Box, Spacer } from '@chakra-ui/react'

const Item = ({producto}) => {
    return (
      <Box>
        <Image src={producto.imagen} />
        <div>{producto.producto}</div>
        <div>{producto.precio}</div>
        <Button>Ver más</Button>
        <Spacer />
      </Box>
  )
}

export default Item