import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img src='https://image.shutterstock.com/image-vector/summer-ad-sale-banner-popart-260nw-1458893918.jpg' alt='' className='checkout__ad'/>
        <div>
          <h2 className='checkout__title'>Your Shopping Cart</h2>
          <CheckoutProduct />
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
        </div>
        <div className='checkout_right'>
          <Subtotal />
        </div>
      </div>
  )
}

export default Checkout