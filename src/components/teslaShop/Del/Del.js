import React from 'react'
import './Del.css'
import img from '../../../Images/TeslaShop/velo.jpg'
function Del() {
  return (
    <div className="del">
      <img src={img} alt="" />
      <h1 >Model S Accessories</h1>
      <div className='bir'>
        <button className='bir'>Shop Now</button>
      </div>
    </div>
  )
}

export default Del