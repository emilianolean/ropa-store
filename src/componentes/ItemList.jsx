import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'


const ItemList = ({ productos }) => {
  
    return (
        <Flex justifyContent="center" alignItems="Center" gap={20} flexWrap="wrap" marginTop="100px">
            {
                productos.map((p) => {
                    return (
                        <>
                            <Item producto={p} key={p.id} 
                            />
                        </>
                    )
                })
            }
        </Flex>
    )
}

export default ItemList