import React, { useEffect, useState } from 'react'
// import { productos } from '../../Assets/productos'
// import { promesa } from '../../Assets/promesa'
// import { Spinner } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../Firebase/firebase'
import { doc, getDoc, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {
  
  const { IdProducto } = useParams();

  const [listProduct, setListProduct] = useState([])
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productCollection = collection(db, 'products');
    const refDoc = doc(productCollection, IdProducto);
    getDoc(refDoc)
    .then((res) => {
      setListProduct({
        id:res.IdProducto,
        ...res.data()
      })
    })
  }, [IdProducto])
  // useEffect(() => {

  return (
    <>
      <ItemDetail listProduct={listProduct}/>
      {/* {!loading ? <Spinner /> : <ItemDetail listProduct={listProduct}/>} */}
    </>
  )
}

export default ItemDetailContainer
