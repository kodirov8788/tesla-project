import React from 'react'
import "./Detal.css"
import img1 from "../../../images/model3_rasm/7.png"
function Detal() {
    return (
        <div className='Detal'>
            <div className="Detal_text">
                <div className="cart_text1">
                    <h2>360°</h2>
                    <p>Rear, side and forward-facing cameras provide maximum visibility</p>
                </div>
                <div className="cart_text2">
                    <h2>250 M</h2>
                    <p>Rear, side and forward-facing cameras provide maximum visibility</p>
                </div>
                <div className="cart_text3">
                    <h2>250 M</h2>
                    <p>Rear, side and forward-facing cameras provide maximum visibility</p>
                </div>
            </div>
            <div class="cart_text">
                <div class="left">
                    <h3>Autopilot</h3>
                    <h2>Future of Driving</h2>
                    <img className='imgg' src={img1} alt="" />
                    <div class="btn-white1">Order Now</div>
                </div>
                <div class="right"><p>Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</p>
                </div>
            </div>
        </div>
    )
}

export default Detal