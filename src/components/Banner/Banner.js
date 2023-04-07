import React from 'react'
import './Banner.css'
import img1 from '../../Images/yerga.jpg'
import img2 from '../../Images/ayol.jpg'
import img3 from '../../Images/kids.jpg'
function Banner() {
    return (
        <div className='Ban'>
            <div className="Banner">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <h2>Men's Apparel</h2>
                <h3>Women's Apparel</h3>
                <h4>Kids’ Apparel</h4>
                    <button className='ilya1'>Shop Now</button>
                    <button className='F2'>Shop Now</button>
                    <button className='p5'>Shop Now</button>
            </div>
        </div>
    )
}

export default Banner