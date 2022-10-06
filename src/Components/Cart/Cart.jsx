import React from 'react'
import { useCartContext } from '../../Context/CartContext'


const Cart = () => {
  
  const { cart, totalPrice, removeItem, cleanCart } = useCartContext()
  
  return (
    <>
      {cart.map(producto => 
          <div key={producto.id}>
            <img src={producto.imagen} alt="Cuadro" />
            <p>{producto.producto}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <button onClick={() => removeItem(producto.id)}>X</button>
          </div>
        )}
        {cart.length === 0 ? 
          <div>Todavía no hay productos en el carrito</div> 
          :
          <>
            <div>Total: ${totalPrice()}</div>
            <button onClick={cleanCart}>Vaciar carrito</button>
          </>
        }
        
    </>
  )
}

export default Cart
