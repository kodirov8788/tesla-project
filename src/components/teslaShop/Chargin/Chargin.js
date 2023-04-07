import React from 'react'
import './Chargin.css'
import img1 from '../../../Images/TeslaShop/charging.jpg'
function Chargin() {
  return (
    <div className="chargin">
      <img src={img1} alt="" />
      <h1 > Charging </h1>
      <div className='man'>
        <button className='man'>Shop Now</button>
      </div>
    </div>
  )
}

export default Chargin