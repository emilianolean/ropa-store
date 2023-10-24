import React from 'react'
import { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()


    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === ""? alert("campo vacio"): alert(`Bienvenido, ${nombre}`)
        email === ""? alert("campo vacio"): alert(`Registrado con el email, ${email}`)

        addDoc(ordersCollection, order).then(({ id })=> setOrderId(id))
    }

    const order ={
        nombre, email
    }

    const ordersCollection = collection(db, "orden")
    return (
        <>
            <h1>Formulario</h1>
            <form className="Formulario" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' onChange={(e)=>setNombre(e.target.value)} />
                <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />

                <button className= "enviarForm" type='submit'>Enviar</button>
            </form>
            <h3>Id de tu compra:{orderId}</h3>
        </>
    )
}

export default Form