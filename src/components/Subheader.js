import React from "react";
import './subheader.css'
import {Link} from "react-router-dom"

function Subheader() {
    return (
        <>
            <div className="subheader">
                <Link to="/shirt" style={{ textDecoration: "none" }}>
                    <div>Shirts</div>
                </Link>
                <Link to="/pant" style={{ textDecoration: "none" }}>
                    <div>Pants</div>
                </Link>
                
            
            </div>
        </>
    )
}

export default Subheader