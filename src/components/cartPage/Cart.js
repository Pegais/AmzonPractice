import React,{useState} from 'react'
// import "../card.css"
import './cart.css'
export default function Cart({ cart }) {



  return (
    <>

      {
        cart.cart.length == 0 ?
          <div className='cart-container'>
            no product in cart.
          </div>
          :
          cart.cart.map((ele) => {
            return (
              <div className='cart-container'>
                <div className='container'>
                  <img src={ele.image} />
                </div>
                <div className='product-detail'>
                  <div>Price</div>
                  <div> Rs.{ele.price}</div>
                </div>
                <div className='quantity-container'>
                  <div>Quantity</div>
                  <button onClick={()=>cart.addToCart(ele) }>+</button>
                  <div>Pcs {ele.quantity}</div>
                  <button onClick={()=>cart.deleteToCart(ele)}>-</button>
                </div>
                <div className='delete'>
                  <button onClick={()=>cart.removeCart(ele)}>Delete from Cart</button>
                </div>
                <div className='total'>
                  <div>Total Price</div>
                  <div>{ele.price * ele.quantity} </div>
                </div>
              </div>
            )
          })
      }

    </>
  )
}
