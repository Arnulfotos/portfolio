import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import me1 from "../../dist/images/room.jpg";

export class Home extends Component {
  render() {
    return (
      <div className="appear">
        <Navbar activeLink={"HOME"} />
        <div className="home">
          <image/>
          <image/>
        </div>
      </div>
    )
  }
}

export default Home
