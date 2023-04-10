import React from 'react'
import "./Salon.css"
import { BiAlbum } from "react-icons/bi"
import img1 from "../../../images/model3_rasm/7.png"
function Salon() {
  return (
    <div className='Salon'>
      <div className="salon_text_icon">
        <div className="salon_text1">
          <h2>15 inch</h2>
          <p>A touchscreen display designed to improve over time</p>
        </div>
        {/* 2 */}
        <div className="salon_text2">
          <BiAlbum />
          <p>A touchscreen display designed to improve over time</p>
        </div>
        {/* 3 */}
        <div className="salon_text3">
        <BiAlbum /> 
          <p>A touchscreen display designed to improve over time</p>
        </div>

      </div>
{/* 2 */}

            <div class="salon_cart_text">
                <div class="salon_left">
                    <h3>Interior</h3>
                    <h2>Built Around the Driver</h2>
                    <img className='img' src={img1} alt="" />
                    <div class="btn-white1">Order Now</div>
                </div>
                <div class="right"><p>Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</p>
                </div>
            </div>
    </div>
  )
}

export default Salon