import React from 'react'
import "./Qora_mosh.css"
import img1 from "../../../images/model3_rasm/9.jpg"
function Qora_mosh() {
    return (
        <div className='Qora_mosh'>
            <img className='mosh_in' src={img1} alt="" />
            <div className="Qora_text">
                <h1>Model 3 Specs</h1>
                <div className='Qora_a1' href="#">Performance</div>
                <div className='Qora_a2' href="#">Long Range AWD</div>
                <div className='Qora_a3' href="#">Rear-Wheel Drive</div>
                <div className="qora_left">
                    <hr width="50px" />
                    <p>Battery Long Range</p>
                    <hr width="50px" />
                    <p>*Acceleration <br />
                        3.1 s 0-60 mph <br />
                        with rollout subtracted <br /></p>
                    {/* 2 */}
                    <hr width="50px" />
                    <p>Range <br />
                        315 miles (EPA est.)</p>
                    <hr width="50px" />

                    {/* 3 */}
                    <p> Drive <br />
                        Dual Motor All-Wheel Drive</p>
                    <hr width="50px" />
                    <p>Seating <br />5 Adults</p>
                </div>
                {/* left */}
                <div className="qora_right">
                    <hr width="50px" />
                    <p>Weight <br />4,048 lbs</p>
                    <hr width="50px" />
                    <p>Cargo  <br />  23 cu ft</p>
                    <hr width="50px" />
                    <p>Displays <br />
                        15" Center Touchscreen</p>
                    <hr width="50px" />
                    <p>Supercharging Max/Payment <br /> Type <br />
                        250 kW Max; Pay Per Use</p>
                    <hr width="50px" />
                    <p>Onboard Charger Max <br />
                        11.5 kW max (48A)</p>
                </div>
            </div>
                <div className="hovera1">Owner's Manual</div>
                <div className="hovera2">Compare</div>
        </div>
    )
}

export default Qora_mosh