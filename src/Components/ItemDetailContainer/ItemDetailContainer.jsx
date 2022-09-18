import React, { useEffect, useState } from 'react'
import { productos } from '../../Assets/productos'
import { promesa } from '../../Assets/promesa'
import { Spinner } from '@chakra-ui/react';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  
  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    promesa(productos)
      .then(res => setListProduct(res.find(item => item.id === 1)))
  }, [])

  return (
    <>
      {!loading ? <ItemDetail listProduct={listProduct}/> : <Spinner />}
    </>
  )
}

export default ItemDetailContainer
