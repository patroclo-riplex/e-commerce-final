import React from 'react'
import axios from 'axios'
import getConfig from '../../utils/getConfig'

const CartInfo = ({productCart}) => {

  const postPurchase = () => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    axios.post(URL, objPurchase, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }

  return (
    <li key={productCart.id} onClick={postPurchase} className='cart-item'>
      <div className="product-text">
          <div className="product-name">
               <h3>{productCart.brand}</h3>
               <h2 id='cart-product-title'>{productCart.title}</h2>
          </div>
          <button onClick={() => deleteProduct(product.id)} className='delete-button'><i className="fa-solid fa-trash-can"></i></button>   {/* Cambiar ruta */}
      </div>
      <div className="quantity-details">
          <input
              type="text" 
              id='quantity' 
              value={productCart.productsInCart.quantity}
              readOnly
          />
          <p className='price-details'>Total: <span>$ {productCart.price}</span></p>
      </div>
      <div className="checkout-container">
          <button onClick={postPurchase} className='checkout-button'>Checkout</button>
      </div>
    </li>
  )
}

export default CartInfo