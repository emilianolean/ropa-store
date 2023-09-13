import React from 'react'
import IteamCount from './ItemCount'
import {Card, CardBody, CardFooter, Stack, Image, Divider, Button, ButtonGroup, Heading, Text} from "@chakra-ui/react"
import { useParams } from 'react-router-dom'

const ItemDetail = ({ productos }) => {
    const { id } = useParams()
    
    const filteredProducts = productos.filter((producto) => producto.id == id)

    return (
        <div>
            {filteredProducts.map((p) =>{

                return (
                    <div key={p.id}>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{p.nombre}</Heading>
                                    <Text color='blue.600' fontSize='2xl'>
                                        $ {p.precio}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        {p.category}
                                    </Text>
                                    <Text>
                                        {p.descripcion}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'>
                                        Comprar
                                    </Button>
                                </ButtonGroup>
                                <IteamCount/>
                            </CardFooter>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemDetail