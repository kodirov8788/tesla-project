import "./Model_3.css"
import { BiAlbum } from "react-icons/bi"
import { BsChevronDown} from "react-icons/bs"
function Model_3() {
  return (
    <div className="Model_3">
      <h1 className="Model_3_h1">Model 3</h1>
      <a className="Model_3_a" href="#">Schedule a Demo Drive</a>

      <div className="Model_3_text1">
        <div className="text1">
          <BiAlbum className="icon1" />
          <h2>3.1s</h2>
          <p>0-60 mph*</p>
        </div>
        <div className="text2">
          <h2>358 mi</h2>
          <p>Range (EPA est.)</p>
        </div>
        <div className="text3">
          <h2>AWD</h2>
          <p>Dual Motor</p>
        </div>
      </div>

      <div className="btn">
        <div className="white">Order Now</div>
        <div className="black">View Inventory</div>
      </div>
< BsChevronDown className="ani"/>


    </div>

  )
}

export default Model_3