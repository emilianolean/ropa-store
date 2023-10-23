import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer
} from '@chakra-ui/react'
import  CartWidget  from './CartWidget'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Flex className='nav'>
            <Box p='4'>
                <Menu>
                    <MenuButton>
                        <HamburgerIcon />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to={"/"}>
                                Inicio
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/Categoria/${"A"}`}>
                                Remeras
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/Categoria/${"B"}`}>
                                Buzos
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={"/Form"}>
                            Formulario
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>   
            </Box>
            <Spacer />
            <Box p='4'>
                <Link to={"/"}>
                    <h2>Ropa-Store</h2>
                </Link>
            </Box>
            <Spacer />
            <Box p='4'>
                <Link to={`/Cart`}>
                    <CartWidget/>
                </Link>
            </Box>
        </Flex>
    </div>
  )
}

export default NavBar