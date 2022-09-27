import React from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return(
        <Link className="cart-widget" to="/cart">
            <AiOutlineShopping />
        </Link>
    )
}

export default CartWidget;