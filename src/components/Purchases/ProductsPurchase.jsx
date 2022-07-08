import React from 'react'
import './style/purchases.css'

const ProductsPurchase = ({product}) => {

  console.log(product)

  return (
    //<section>
    <ul className='purchase-info' onClick={() => navigate(`/product/${product.id}`)}>
      <li className='product-name'>{product.title}</li>
      <li className='product-quantity'>{product.productsInCart.quantity}</li>
      <li className='product-price'>$ {product.price}</li>
    </ul>
    //</section>
  )
}

export default ProductsPurchase