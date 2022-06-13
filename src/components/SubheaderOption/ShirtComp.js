import React from 'react'
import "../card.css"
// destructing 
export default function ShirtComp({data}) {
    console.log(data)
  return (
    
    <div className='parent'>
    {

        data.shirtData.map((ele) => {
            return (
                <div className='card-container'>
                    <div className='image-container'>
                        <img src={ele.image} />
                    </div>
                    <div className='details'>
                        <div className='title'>{ele.title}</div>
                        <div className='price'>{ ele.price}</div>
                        <div className='quantity'>{ ele.quantity}</div>
                        <button onClick={()=>data.addToCart(ele)}>Add to Cart</button>
                    </div>
                </div>
            )
        })



        }
        </div>

  )
}
