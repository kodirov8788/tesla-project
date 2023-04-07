import React from 'react'
import './Tesla.css'
import img1 from '../../../Images/TeslaShop/oq.jpg'
function Tesla() {
  return (
    <div className="detall1">
      <img src={img1} alt="" />
      <h1 >Wall Connecter</h1>
      <span>The most convenient way to charge at home</span>
      <div className='tort'>
        <button className='tort'>Shop Now</button>
      </div>
    </div>
  )
}

export default Tesla