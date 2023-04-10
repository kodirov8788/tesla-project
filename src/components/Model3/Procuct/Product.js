import React from 'react'
import "./Product.css"
import { BiAlbum } from "react-icons/bi"
function Product() {
    return (
        <div className='Product'>
            <div className="div_icon2">
                <div className="icon_text1">
                    <BiAlbum className='icon2' />
                    <h2> 3.1s</h2>
                    <p>Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds</p>
                </div>
                {/* 2 */}
                <div className="icon_text1">
                    <h2>162mph</h2>
                    <p>Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds</p>
                </div>
                {/* 3 */}
                <div className="icon_text1">
                    <h2>AWD</h2>
                    <p>Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions</p>
                </div>

            </div>
        </div>
    )
}

export default Product