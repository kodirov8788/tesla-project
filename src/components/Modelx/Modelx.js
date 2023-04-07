import React from 'react'
import './Modelx.css'
import img1 from '../../Images/yolda.jpg'
function Modelx() {
    return (
        <div className="model">
        <img src={img1} alt="" />
        <h1 >Model X Accessories</h1>
        <div className='box3'>
        <button className='box3'>Shop Now</button>
        </div>
    </div>  
  )
}

export default Modelx