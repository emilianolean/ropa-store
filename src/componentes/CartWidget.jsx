import { Divider, Flex, Box, Link } from '@chakra-ui/react'
import React from 'react'


const CartWidget = () => {

    //contador
  return (
    <Link to="/cart">
        <div>
            <Flex>
                <Box>
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                </Box>
                <Divider />
                <Box>
                    <p>7</p>
                </Box>
            </Flex>
        </div>
    </Link>
        
    )
}

export default CartWidget