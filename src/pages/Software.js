import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../layout/Navbar'
import Columned from "react-columned";
import './pages.css';

import color1 from '../../dist/images/software/color1.jpg';
import color2 from '../../dist/images/software/color2.jpg';
import color3 from '../../dist/images/software/color3.jpg';
import color4 from '../../dist/images/software/color4.jpg';
import color5 from '../../dist/images/software/color5.jpg';
import color6 from '../../dist/images/software/color5.jpg';
import color7 from '../../dist/images/software/color5.jpg';
import color8 from '../../dist/images/software/color5.jpg';
import ball from '../../dist/images/software/ball.gif';
import color_animated from '../../dist/images/software/color_animated.gif';
import dot_terrain from '../../dist/images/software/dot_terrain.gif';
import evolution from '../../dist/images/software/evolution.gif';
import led_zoo from '../../dist/images/software/led_zoo.gif';
import miami from '../../dist/images/software/miami.gif';
import sin from '../../dist/images/software/sin.gif';
import slb from '../../dist/images/software/slb.jpg';
import bandTogether from '../../dist/images/software/bandtogether.png';
import bandTogether1 from '../../dist/images/software/bandtogether1.png';

const images = [
  slb,
  dot_terrain,
  led_zoo,
  sin,
  color1,
  evolution,
  miami,
  ball,
  color_animated,
  color2,
  bandTogether,
  bandTogether1
  // color3,
  // color4,
  // color5,
  // color6,
  // color7,
  // color8,
];

export class Software extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return <div>
      <Navbar activeLink={"SOFTWARE"} />
      <div className="page">
        <div className="appear">

          <MediaQuery minDeviceWidth={500}>
            <div className="software">
              <div className="title software-title">SOFTWARE DEVELOPMENT</div>
              <div className="software-text">some of my projects</div>
              <img src={slb} style={setHeight} />
              <img src={bandTogether} style={setHeight} />
              <img src={bandTogether1} style={setHeight} />

              <div className="title software-title">COMPUTER GRAPHICS</div>
              <img src={dot_terrain} style={setHeight} />
              <img src={sin} style={setHeight} />
              <img src={color1} style={setHeight} />
              <img src={evolution} style={setHeight} />
              <img src={ball} style={setHeight} />
              <img src={color_animated} style={setHeight} />
              <img src={color2} style={setHeight} />
              {/* <img src={miami} style={setHeight}/> */}

              <div className="title software-title">LEDs/ARDUINO/RASPBERRY PI</div>
              <img src={led_zoo} style={setHeight} />

              {/* <Columned columns={3} className="gallery">
              {images.map((value, index) => {
                return <img className="img" key={index} src={value} onClick={() => this.setState({ isOpen: true, photoIndex: index })} />
              })}
            </Columned> */}
            </div>

          </MediaQuery>

          <MediaQuery maxDeviceWidth={500}>
            <Columned columns={1}>
              {images.map((value, index) => {
                return <img className="img" key={index} src={value} onClick={() => this.setState({ isOpen: true, photoIndex: index })} />
              })}
            </Columned>
          </MediaQuery>

          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>
      </div>
    </div>;
  }
}

export default Software;

const setHeight = {
  height: '300px',
  margin: '5px'
}