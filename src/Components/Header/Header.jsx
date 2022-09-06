import React from 'react';
import Navbar from '../Navbar/Navbar'
import CartWidget from '../CartWidget/CartWidget'
import './Header.css';


const Header = () => {
    
    return (
        <>
        <header>
            <div className="header-envios">6 CUOTAS SIN INTERES // ENVÍOS A TODO EL PAÍS</div>
            <div className="header-navbar">
                <Navbar />
                <div className="titulo">pimp my wall</div>
                <CartWidget />
            </div>
        </header>
        </>
    )
}

export default Header;