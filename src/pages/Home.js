import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import MediaQuery from 'react-responsive'
import room from "../../dist/images/room.jpg";
import deyoung from "../../dist/images/deyoung-desktop.jpg";
import gym from "../../dist/images/photos/portfolio/p1.jpg";
import ania1 from "../../dist/images/photos/portfolio/p5.jpg";
import house from "../../dist/images/photos/portfolio/p12.jpg";
import ania2 from "../../dist/images/ania.jpg";
import spark from "../../dist/images/yellow.jpg";
import lamp from "../../dist/images/photos/miami/miami25.jpg";

const images = [
  gym, house, ania2, room, ania1, spark, lamp, deyoung
]

export class Home extends Component {
  render() {
    return (
      <div className="appear">
        <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={false} /></MediaQuery>
        <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={true} /></MediaQuery>
        <div className="fadein">
          <img src={images[0]} className="f1" />
          <img src={images[1]} className="f2" />
          <img src={images[2]}  className="f3" />
          <img src={images[3]}  className="f4" />
          <img src={images[4]}  className="f5" />
          <img src={images[5]}  className="f6" />
          <img src={images[6]}  className="f7" />
          <img src={images[7]}  className="f8" />
        </div>
      </div>
    )
  }
}

export default Home
