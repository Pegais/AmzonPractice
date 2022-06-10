import React from 'react'
import "../card.css"

export default function Cart({ cart }) {
  return (
    <>
      <div className='parent'>
      {
        cart.cart.length == 0 ?
          <div>there is no product added in cart</div>
          :
          cart.cart.map((ele) => {
            return (
              <div className='card-container' key={ele.id}>
                <div className='image-container'>
                  <img src={ele.image} />
                </div>
                <div className='details'>
                  <div className='title'>{ele.title}</div>
                  <div className='price'>{ele.price}</div>
                  <div className='quantity'>{ele.quantity}</div>
                  {/* we have to put a arrow funciton in order to call a function directly in incline onclick*/}
                  <button onClick={() => cart.addToCart(ele)}>Add to Cart</button>
                </div>
              </div>
            )
          })
      }
      </div>
    </>
  )
}
