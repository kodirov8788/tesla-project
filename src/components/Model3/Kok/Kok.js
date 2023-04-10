import React from 'react'
import "./Kok.css"
import { BiAlbum } from "react-icons/bi"

function Kok() {
    return (
        <div className='xavo'>
            <div className="xavo_text">
                <div className="xavo_text1">
                    <h1>2</h1>
                    <p>Independent motors digitally control torque to the front and rear wheels</p>
                </div>
                {/* 2 */}
                <div className="xavo_text1">
                    <h1>10ms</h1>
                    <p>Independent motors digitally control torque to the front and rear wheels</p>
                </div>
                {/* 3 */}
                <div className="xavo_text1">
                    <h1><BiAlbum /></h1>
                    <p>Independent motors digitally control torque to the front and rear wheels</p>
                </div>
            </div>

            <div className="cart_text">
                <div className="left">
                    <h3>All-Wheel Drive</h3>
                    <h2>Dual Motor</h2>
                    <div className="btn-white">Order Now</div>
                </div>
                <div className="right">
                    <p>Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</p>
                </div>
            </div>
        </div>
    )
}

export default Kok