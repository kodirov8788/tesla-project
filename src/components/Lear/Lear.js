import React from 'react'
import './Lear.css'
import img1 from'../../Images/car.jpg'
function Lear() {
    return (
        <div className="lear">
        <img src={img1} alt="" />
        <h1 >Model 3 Accessories</h1>
        <div className='ikki'>
        <button className='ikki'>Shop Now</button>
        </div>
    </div>  
  )
}

export default Lear