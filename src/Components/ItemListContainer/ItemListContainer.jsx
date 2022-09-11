import React, { useEffect } from 'react';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import { productos } from '../../Assets/productos'
import { promesa } from '../../Assets/promesa'

const ItemListContainer = (props) => {

    const stock = 20;
    
    const initial = 1;

    const onAdd = (contador) => {
        console.log(`Agregaste ${contador} al carrito!`);
    };

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        
    }, [])


    return(
        <>
        <div className="container">{props.greeting}</div>
        <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;