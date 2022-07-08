import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'
import './style/cartScreen.css'

const CartScreen = () => {

  const cart = useSelector(state => state.cart)

  return (
    <div>
      <h2>My Cart</h2>
      {
        cart?.map(productCart => (
          <CartInfo 
            key={productCart.id}
            productCart={productCart}
          />
        ))
      }
    </div>  
  )
}

export default CartScreen