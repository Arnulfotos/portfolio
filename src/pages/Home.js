import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import MediaQuery from 'react-responsive'
import TinyCrossfade from "react-tiny-crossfade";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0
    };
  }

  changeImage() {
    this.setState({
      imageIndex: (this.state.imageIndex + 1) % 8
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeImage(), 7000); // 5000 is duration
  }

  renderSwitch(param) {
    switch (param) {
      case 0:
        return <div className="home1 back-img" key="a" />;
      case 1:
        return <div className="home2 back-img" key="b" />;
      case 2:
        return <div className="home3 back-img" key="c" />;
      case 3:
        return <div className="home4 back-img" key="d" />;
      case 4:
        return <div className="home5 back-img" key="e" />;
      case 5:
        return <div className="home6 back-img" key="f" />;
      case 6:
        return <div className="home7 back-img" key="g" />;
      case 7:
        return <div className="home8 back-img" key="h" />;
      default:
        return <div className="home1 back-img" key="i" />;
    }
  }

  render() {
    return (
      <div className="appear">
        <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={false} /></MediaQuery>
        <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={true} /></MediaQuery>
        <TinyCrossfade className="component-wrapper">
          {this.renderSwitch(this.state.imageIndex)}
        </TinyCrossfade>
      </div>
    )
  }
}

// const style = {
//   width: '99vw'
// }

export default Home
