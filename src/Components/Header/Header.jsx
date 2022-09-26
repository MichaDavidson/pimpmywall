import React from 'react';
import Navbar from '../Navbar/Navbar'
import CartWidget from '../CartWidget/CartWidget'
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    
    return (
        <>
        <header>
            <div className="header-envios">6 CUOTAS SIN INTERES // ENVÍOS A TODO EL PAÍS</div>
            <div className="header-navbar">
                <Navbar />
                <Link to="/" className="titulo">pimp my wall</Link>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
        </header>
        </>
    )
}

export default Header;