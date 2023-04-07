import React from 'react'
import './Detalies.css'
import img1 from '../../Images/tel.jpg'
import img2 from '../../Images/odam.jpg'
import img3 from '../../Images/tesla.png'
function Detalies() {
  return (<div className='box'>

    <div className="box1">
      <h1>Best Sellers</h1>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <h2>Wireless Portable Charger 2.0</h2>
      <h2 className='p2'>Men's Raven Lightweight Bomber Jacket</h2>
      <h2 className='p3'>Tesla shop Gift Card</h2>
    </div>
  </div>
  )
}

export default Detalies