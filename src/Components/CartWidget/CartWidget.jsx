import React from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import './CartWidget.css'
import { useCartContext } from '../../Context/CartContext'


const CartWidget = () => {
    
    const { totalQuantity } = useCartContext()
    
    return(
    <>
       <AiOutlineShopping />
       <p>{totalQuantity()}</p>
    </>
    )
}

export default CartWidget;