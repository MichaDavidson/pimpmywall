import React, { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from "../../Firebase/firebase"
import { Link } from 'react-router-dom'
import swal from 'sweetalert2'

const Form = () => {

    const { cart, clear, totalPrice } = useCartContext()

    const [datos, setDatos] = useState({
        Nombre: "",
        Apellido: "",
        DNI: "",
        Mail: ""
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
     }

     const finalizarCompra = (e) => {
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
          comprador: datos,
          items: cart,
          date: serverTimestamp(),
          total: totalPrice
        })
        .then(res => {
          console.log(res.id);
          swal({
            title: "Compra finalizada!",
            text: "Tu compra fue realizada con éxito, " + datos.Nombre + ". Tu número de seguimiento es: " + res.id,
            icon: "success",
            button: "Aww yiss!",
          });
          clear();
        })
      }

  return (
    <>
        <h1>Formulario</h1>
        <form >
            <input type="text" placeholder="Nombre" name="Nombre" onChange={handleInputChange}></input>
            <input type="text" placeholder="Apellido" name="Apellido" onChange={handleInputChange}></input>
            <input type="number" placeholder="DNI" name="DNI" onChange={handleInputChange}></input>
            <input type="text" placeholder="Correo Electrónico" name="Correo Electrónico" onChange={handleInputChange}></input>
        </form>
        <button type="Submit" onClick={finalizarCompra}>Submit</button>
        <Link to="/">Cancelar</Link>
    </>
  )
}

export default Form
