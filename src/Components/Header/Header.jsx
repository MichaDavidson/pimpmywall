import React from 'react';
import Navbar from '../Navbar/Navbar'
import logo from '../../Assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './Header.css';
import { Heading } from '@chakra-ui/react'


const Header = () => {
    return (
        <>
        <header>
            <div class="logo">
                <img class="logo-imagen" src={logo} alt="Pimp My Wall logo" width="130px" />
                <Heading>Pimp My Wall</Heading>
            </div>
            <div class="navbar">
                <CartWidget />
                <Navbar />
            </div>
        </header>
        <ItemListContainer />
        </>
    )
}

export default Header;