import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer
} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { HamburgerIcon } from '@chakra-ui/icons'

const NavBar = () => {
  return (
    <div>
        <Flex>
            <Box p='4'>
                <Menu>
                    <MenuButton>
                        <HamburgerIcon />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Tienda</MenuItem>
                        <MenuItem>Contacto</MenuItem>
                        <MenuItem>Quienes Somos</MenuItem>
                    </MenuList>
                </Menu>   
            </Box>
            <Spacer />
            <Box p='4'>
                <h1>Ropa-Store</h1>
            </Box>
            <Spacer />
            <Box p='4'>
            <CartWidget/>
            </Box>
        </Flex>
    </div>
  )
}

export default NavBar