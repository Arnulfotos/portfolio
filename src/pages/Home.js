import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import MediaQuery from 'react-responsive'
import room from "../../dist/images/home/room.jpg";
import deyoung from "../../dist/images/home/deyoung-desktop.jpg";
import gym from "../../dist/images/photos/portfolio/p1.jpg";
import ania1 from "../../dist/images/photos/portfolio/p5.jpg";
import house from "../../dist/images/photos/portfolio/p12.jpg";
import ania2 from "../../dist/images/home/ania.jpg";
import spark from "../../dist/images/home/yellow.jpg";
import drumming from "../../dist/images/music/mjf/drumming.mp4";
import drummingMobile from "../../dist/images/music/mjf/drummingmobile.mp4";

const images = [
  gym, deyoung, ania2, room, spark, house, ania1
]

export class Home extends Component {
  render() {
    return (
      <div className="appear">
        <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={false} /></MediaQuery>
        <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={true} /></MediaQuery>
        <div className="fadein">
          <video playsInline autoPlay muted loop className="f1" height="100%">
            <MediaQuery minDeviceWidth={500}><source src={drumming} type="video/mp4" /></MediaQuery>
            <MediaQuery maxDeviceWidth={500}><source src={drummingMobile} type="video/mp4" /></MediaQuery>
          </video>
          <img src={images[0]} className="f2" />
          <img src={images[1]} className="f3" />
          <img src={images[2]} className="f4" />
          <img src={images[3]} className="f5" />
          <img src={images[4]} className="f6" />
          <img src={images[5]} className="f7" />
          <img src={images[6]} className="f8" />
        </div>
      </div>
    )
  }
}

export default Home
