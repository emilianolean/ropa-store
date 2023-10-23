import { ShoppingCartContext } from "./context/ShoppingCartContext";
import { useContext } from "react";
import { Divider, Flex, Box, Link } from '@chakra-ui/react';

const CartWidget = () => {
  const { totalQuantity } = useContext(ShoppingCartContext);

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
                    <p className="cantCart">{totalQuantity}</p>
                </Box>
            </Flex>
        </div>
    </Link>
  );
};

export default CartWidget;