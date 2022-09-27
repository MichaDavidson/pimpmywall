import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const FinalizarCompra = ({compra}) => {
  
  const setCompra = () => {
    setCompra(true);
  }
  
  return (
    <Link>
        <Button to="/cart" onClick={setCompra}>Finalizar compra</Button>
    </Link>
  )
}

export default FinalizarCompra
