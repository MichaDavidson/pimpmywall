import React from 'react';
import './Navbar.css'
import {Menu, MenuButton, MenuList, Portal, IconButton, MenuItem} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
                <Portal>
                    <MenuList>
                        <Link to="/categoria/playa"><MenuItem>Playa</MenuItem></Link>
                        <Link to="/categoria/bohoyterra"><MenuItem>Boho y Terra</MenuItem></Link>
                        <Link to="/categoria/mundo"><MenuItem>Mundo</MenuItem></Link>
                        <Link to="/categoria/sets"><MenuItem>Sets</MenuItem></Link>
                    </MenuList>
                </Portal>
            </Menu>
        </div>
    )
}

export default Navbar;