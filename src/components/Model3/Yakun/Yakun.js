import React from 'react'
import "./Yakun.css"
import img1 from "../../../images/model3_rasm/10.jpg"
function Yakun() {
    return (
        <div className='Yakun'>
            <img className='yakun_img1' src={img1} alt="" />
            <h1 className='yakun_h1'>Experience Model 3</h1>
            <h3 className='yakun_h3'>Leasing starting at $349/mo</h3>
            <span>
                <button>Order Now</button>
                <button>View Inventory</button>
                <p>Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to</p>
                <p>Learn more about Standard Connectivity and any limitations.</p>
                <hr className='bottom' />
            </span>
        </div>
    )
}

export default Yakun