import React from 'react';
import {Menu, MenuButton, MenuList, MenuItem, Portal} from '@chakra-ui/react'

const Navbar = () => {
    return (
        <>
        <Menu>
            <MenuButton>PimpIt</MenuButton>
            <Portal>
                <MenuList>
                    <MenuItem>Playa</MenuItem>
                    <MenuItem>Bosque</MenuItem>
                    <MenuItem>Montaña</MenuItem>
                    <MenuItem>Mundo</MenuItem>
                </MenuList>
            </Portal>
        </Menu>
        </>
    )
}

export default Navbar;

