import React from 'react'
import { Image, Button, VStack, Box } from '@chakra-ui/react'

const Item = ({producto}) => {
    return (
    <VStack>
        <Box>
          <Image src={producto.imagen} />
          <div>{producto.producto}</div>
          <div>{producto.precio}</div>
          <Button>Ver más</Button>
        </Box>
    </VStack>
  )
}

export default Item