import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
// import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { productos } from '../../Assets/productos'
import { promesa } from '../../Assets/promesa'
import { Spinner } from '@chakra-ui/react';

const ItemListContainer = (props) => {

    const stock = 20;
    
    const initial = 1;

    const onAdd = (contador) => {
        console.log(`Agregaste ${contador} al carrito!`);
    };

    const [listaProductos, setListaProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        promesa(productos)
            .then(res => {
                setLoading(false)
                setListaProductos(res)
            })
    }, []);
    
    return(
        <>
            {/* <div className="container">{props.greeting}</div> */}
            {/* <ItemCount stock={stock} initial={initial} onAdd={onAdd}/> */}
            {loading ? <Spinner /> : <ItemList listaProductos={listaProductos} />}
        </>
    )
}

export default ItemListContainer;