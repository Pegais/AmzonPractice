import React,{useState} from 'react'
import './card.css'
import data from '../Object'
// object rendering



// let obj  = {key:value};
// let arr = [];
// object rendering => dynamic way of inserting data;
// array of object => collection of data;


// array.map => callbacks
// let arr = [1,2,3,4,5]
// arr.map((ele,idx)=>console.log(ele,idx))
// `${}`=> string value
// map=> it returns an array which is equal to original in length
// but changes occurs in value.
export default function Card({ inputState }) {
    // console.log(inputState.addToCart);
   let filteredData =data.filter(ele=>ele.type.includes(inputState.inputState.toLowerCase()))
    return (
        <>
            <div className='parent'>
            {
               filteredData.length==0?
                data.map((ele) => {
                    return (
                        <div className='card-container'key={ele.id}>
                            <div className='image-container'>
                                <img src={ele.image} />
                            </div>
                            <div className='details'>
                                <div className='title'>{ele.title}</div>
                                <div className='price'>{ ele.price}</div>
                                <div className='quantity'>{ele.quantity}</div>
                                {/* we have to put a arrow funciton in order to call a function directly in incline onclick*/}
                                <button onClick={()=>inputState.addToCart(ele)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                }):filteredData.map((ele) => {
                    return (
                        <div className='card-container'key={ele.id}>
                            <div className='image-container'>
                                <img src={ele.image} />
                            </div>
                            <div className='details'>
                                <div className='title'>{ele.title}</div>
                                <div className='price'>{ ele.price}</div>
                                <div className='quantity'>{ ele.quantity}</div>
                                <button onClick={()=>inputState.addToCart(ele)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                })



                }
                </div>


        </>
    )
}
