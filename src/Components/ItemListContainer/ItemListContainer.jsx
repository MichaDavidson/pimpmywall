import React from 'react';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {

    const stock = 20;
    const initial = "initial";

    const onAdd = (contador) => {
        console.log(`Agregaste ${contador} al carrito!`);
    };

    return(
        <>
        <div className="container">{props.greeting}</div>
        <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;