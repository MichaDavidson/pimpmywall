import React from 'react';
import Navbar from '../Navbar/Navbar'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Header.css';


const Header = () => {
    const greeting = "Hola usuario de mi página"
    
    return (
        <>
        <header>
            <Navbar />
            <div class="titulo">pimp my wall</div>
            <CartWidget />
        </header>
        <ItemListContainer greeting={greeting}/>
        </>
    )
}

export default Header;