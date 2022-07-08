import React from 'react'
import ProductsPurchase from './ProductsPurchase'
import './style/purchases.css'

const PurchasesCard = ({purchase}) => {

  return (
    <li className='purchase-column' key={purchase.id}>
    <div className='puchase-card'>
      <h3 className="purchase-date">{purchase.updatedAt}</h3>
      {
        purchase.cart.products.map(product => (
          <div className='each-purchase-products'>
          <ProductsPurchase 
            key={product.id}
            product={product}
          />
          </div>
        ))
      }
    </div>
    </li>
  )
}

export default PurchasesCard