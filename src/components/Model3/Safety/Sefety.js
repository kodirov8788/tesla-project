import React from 'react'
import "./Sefety.css"
import img1 from "../../../images/model3_rasm/2.jpg"
function Sefety() {
  return (
    <div className='Sefety'>
      <h2 className='h2'>Rigid Structure</h2>
      <h2 className='h2'>Impact Protection</h2>
      <h2 className='h2'>Very Low Rollover Risk</h2>
      <img src={img1} alt="" className="seftey_img1" />
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>

      <div className='Sefety_text1'>
        <h3>Sefety</h3>
        <h1>Built for Safety</h1>
        <div className="box_text1">
          <p>Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards</p>
        </div>

        <div className="box_text2">
          <p><span>5-Star Rating</span> <br />
            Model 3 achieved NHTSA 5-star safety <br /> ratings in every category and subcategory.

          </p>

          <div className="box_text3">
            <p> <span>Top Safety Pick+</span> <br />
              Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.</p>
          </div>
        </div>
      </ div>
    </div>
  )
}

export default Sefety