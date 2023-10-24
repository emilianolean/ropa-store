import React, { useContext } from 'react'
import IteamCount from './ItemCount'
import {Card, CardBody, CardFooter, Stack, Divider, Button, Heading, Text} from "@chakra-ui/react"
import { useParams } from 'react-router-dom'
import { ShoppingCartContext } from './context/ShoppingCartContext'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from 'react'


const ItemDetail = () => {
    const [producto, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const oneItem = doc(db, "ropa", `${id}`);
        getDoc(oneItem).then((snapshot) => {
        if (snapshot.exists()) {
            const docs = snapshot.data();
            setProduct(docs);
        } else {
            console.log("Producto no encontrado");
        }
        });
    }, [id]);
    
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '900px', width: 'auto' }} key={id}>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='2'>
                                    <Heading size='md'>{producto.Nombre}</Heading>
                                    <Text color='blue.600' fontSize='2xl'>
                                        $ {producto.Precio}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        {producto.Category}
                                    </Text>
                                    <img src={producto.img} alt="" />
                                    <Text>
                                        {producto.descripcion}
                                    </Text>
                                    </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <IteamCount/>
                            </CardFooter>
                        </Card>
            </div>
        </div>
    )
}

export default ItemDetail