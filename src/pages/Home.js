import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import me1 from "../../dist/images/room.jpg";

export class Home extends Component {
  render() {
    return (
      <div className="appear">
        <Navbar activeLink={"HOME"} />
        <div className="home" >
          {/* <img src={me1} style={style}/> */}
          {/* <image/>
          <image/> */}
        </div>
      </div>
    )
  }
}

// const style = {
//   width: '99vw'
// }

export default Home
