import React from 'react';
import Navbar from '../Navbar/Navbar'
import CartWidget from '../CartWidget/CartWidget'
import './Header.css';


const Header = () => {
    
    return (
        <>
        <header>
            <div class="header-envios">6 CUOTAS SIN INTERES // ENVÍOS A TODO EL PAÍS</div>
            <div class="header-navbar">
                <Navbar />
                <div class="titulo">pimp my wall</div>
                <CartWidget />
            </div>
        </header>
        </>
    )
}

export default Header;