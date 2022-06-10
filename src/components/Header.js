import React from 'react'
// export default means that in one file or module there is only one functional component
// input element closing
// In react every html element must be closed.
// in react we do not use class instead we use className => because in react we write jsx that is a part of javascript and class is a reserved keyword in js.
// Jsx is parsed by using Babel in react.
import './header.css'
import { Link } from 'react-router-dom'
import amzonImg from "../images/amazon.png"
export default function Header({ setInputState }) {
    // console.log(setInputState);
    console.log(setInputState.cart);
    function manageInput(e){
        let { value } = e.target
        console.log(value);
        setInputState.setInputState(value)

    }
    return (
        <>
<div className="header">
                <div className="img-container">
                    {/* from src folder  */}
                    {/* <img src={amzonImg} />   */}
        {/* from public folder */}
                    
                    <Link to="/"><img src="/images/amazon.png" /></Link>
                    {/* we are writing any js value */}
                </div>
                <div className="content-container">
                    <div className="hello">Hello</div>
                    <div className="Address">Select your address</div>
                </div>
                <div className="search-parent">
  <input type="text" placeholder="Search your product here" onChange={manageInput}/>
                </div>
                <div className='cart' style={{ color: "blue", fontWeight:"bold"}}>
                   <Link to="/cartpage" > <div>cart</div></Link>
                    <div className='box'>{setInputState.cart.length}</div>
                </div>
            </div>
        
      
      </>
  )
}
