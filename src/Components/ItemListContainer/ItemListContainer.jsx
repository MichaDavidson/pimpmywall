import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
// import { Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'


const ItemListContainer = () => {

    const { IdCategoria } = useParams();
    
    const [listaProductos, setListaProductos] = useState([]);
    // const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('categoria', '==', IdCategoria || null))
        getDocs(IdCategoria ? q : productsCollection)
        .then((data)=> {
            const listProducts = data.docs.map((producto) => {
                return {
                    ...producto.data(),
                    id: producto.id
                }
            })
            setListaProductos(listProducts)
        })
    }, [IdCategoria])
     
    return(
        <>
            <ItemList listaProductos={listaProductos} />
            {/* {loading ? <Spinner /> : <ItemList listaProductos={listaProductos} />} */}
        </>
    )
}

export default ItemListContainer;