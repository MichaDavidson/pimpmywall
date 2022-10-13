import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
  
  const { cart, totalPrice, removeItem, clear } = useCartContext()
  
  console.log(cart)

  return (
    <>
      {cart.map(producto =>
          <div key={producto.id}>
            <img src={producto.imagen} alt="Cuadro" />
            <p>{producto.producto}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <button onClick={() => removeItem(producto.id)}>X</button>
            <p>{producto.precio*producto.cantidad}</p>
          </div>
        )}
        {cart.length === 0 ? 
          <div>Todavía no hay productos en el carrito</div> 
          :
          <>
            <div>Total: ${totalPrice()}</div>
            <button onClick={clear}>Vaciar carrito</button>
            <Link to='/form'><button>Finalizar compra</button></Link>
          </>
        }
    </>
  )
}

export default Cart
