import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import me1 from "../../dist/images/room.jpg";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar activeLink={"HOME"} />
        <div className="home">
        </div>
      </div>
    )
  }
}

export default Home
