import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
// import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { productos } from '../../Assets/productos'
import { promesa } from '../../Assets/promesa'
import { Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    let { IdCategoria } = useParams();
    
    const [listaProductos, setListaProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        promesa(productos)
            .then(res => {
                if (IdCategoria){
                    setLoading(false)    
                    setListaProductos(res.filter(producto => producto.categoria === IdCategoria))
                } else {
                    setLoading(false)
                    setListaProductos(res)
                }
            })
    }, [IdCategoria]);
    
    return(
        <>
            {loading ? <Spinner /> : <ItemList listaProductos={listaProductos} />}
        </>
    )
}

export default ItemListContainer;