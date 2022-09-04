import React from 'react';
import './Navbar.css'
import {Menu, MenuButton, MenuList, MenuItem, Portal, IconButton} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
    return (
        <div class="navbar">
            <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
                <Portal>
                    <MenuList>
                        <MenuItem>Playa</MenuItem>
                        <MenuItem>Bosque</MenuItem>
                        <MenuItem>Montaña</MenuItem>
                        <MenuItem>Mundo</MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
        </div>
    )
}

export default Navbar;

