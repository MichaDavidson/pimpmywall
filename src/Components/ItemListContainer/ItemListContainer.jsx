import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return(
        <div class="container">{props.greeting}</div>
    )
}

export default ItemListContainer;