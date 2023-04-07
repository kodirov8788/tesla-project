import React from 'react'
import './ModelY.css'
import img1 from '../../../Images/TeslaShop/Y.jpg'
function ModelY() {
  return (
    <div className="modey">
      <img src={img1} alt="" />
      <h1 >Model Y Accessories</h1>
      <div className='said'>
        <button className='said'>Shop Now</button>
      </div>
    </div>
  )
}

export default ModelY