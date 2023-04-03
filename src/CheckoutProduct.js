import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct() {
  return (
        <div className='checkoutProduct'>
        <img src='https://m.media-amazon.com/images/I/41CB1rnC5tL._AC_SY400_.jpg' alt='' />
        <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>
        Redmi A1 (Black, 2GB RAM, 32GB Storage) | Helio A22 | 5000 mAh Battery | 8MP AI Dual Cam | Leather Texture Design | Android 12
        </p>
        <p className='checkoutProduct__price'>
            <small>INR</small>
            <strong>20</strong>
        </p>
        <div className='checkoutProduct__rating'>
            rating:**
        </div>
        <button>Remove from Cart</button>
        
        </div>

        </div>
  )
}

export default CheckoutProduct