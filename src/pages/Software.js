import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../layout/Navbar'
import Columned from "react-columned";
import resume from "../../dist/images/Resume.pdf";
import './pages.css';

import color1 from '../../dist/images/software/color1.png';
import color2 from '../../dist/images/software/color2.png';
import color3 from '../../dist/images/software/color3.png';
import color4 from '../../dist/images/software/color4.png';
import color5 from '../../dist/images/software/color5.png';
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
import leaseEasy from '../../dist/images/software/leaseasy.png';
import stairs from '../../dist/images/software/stairs.gif';
import bag from '../../dist/images/software/bag.gif';

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
  bandTogether1,
  color3,
  color4,
  color5,
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
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"SOFTWARE"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"SOFTWARE"} mobile={true} /></MediaQuery>
      <div className="page">
        <div className="appear">

          <MediaQuery minDeviceWidth={500}>
            <div className="software">
              <div className="software-intro">
                Hi! I'm a Computer Science undergraduate at <ut>The University of Texas at Austin</ut>. I love software development and UI/UX design and am working towards becoming a full time front-end developer. I also study fine arts as a minor and enjoy finding ways to intersect the two passions with creative tools such as <pi>Raspberry PI</pi>, <arduino>Arduino</arduino>, and <processing>Processing</processing>. This is a selected collection of my programming and web related projects. If you're looking for more details about my technical skills, you can find it on my <a href={resume} target='_blank'>resume</a> and <a href="https://www.linkedin.com/in/abhivelaga/" target='_blank'>linkedin</a>.
              </div>

              <div className="software1 back-img software-flex">
                <img src={bandTogether} className="software-ft" />
                <div className="software-ft-title">BAND TOGETHER</div>
                <div className="software-ft-subtitle">ui design + front end development</div>
                <div className="software-ft-info">this is the description where i talk about how badass this is and maybe even the tech involved this is the description where i talk about how badass this is and maybe even the tech involved</div>
                <a href="https://bandtogether.events" target='_blank'><div className="software-ft-button">VIEW</div></a>
              </div>

              <div className="software2 software-flex">
                <div className="software2-flex">
                  <img src={dot_terrain} className="software2-img" />
                  <img src={sin} className="software2-img" />
                  <img src={evolution} className="software2-img" />
                </div>
                <div className="software-ft-title">COMPUTER GRAPHICS</div>
                <div className="software-ft-info">this is where i talk about all the badass animations and software ive made with processing this is where i talk about all the badass animations and software ive made with processing</div>
                <div className="software-ft-button">SEE MORE</div>
              </div>

              <div className="software3 back-img software-flex">
                <img src={leaseEasy} className="software-ft" />
                <div className="software-ft-title">LEASE EASY</div>
                <div className="software-ft-subtitle">ui design</div>
                <div className="software-ft-info">talk about how i designed this ui for a ut longhorn startup lab startup thing ma jig talk about how i designed this ui for a ut longhorn startup lab startup thing ma jig</div>
              </div>

              < img src={led_zoo} style={fullWidth} className="led" />
              <div className="software-grid">
                <div className="software-grid-text">
                  <div className="grid-text-title">LED STRIP PROGRAMMING</div>
                first of all, yes i will record much higher quality gifs, these are placeholders. anyway, oh boy do i love led strips and so this is where i dish about my passion for them and have i mentioned i own 100s of feet and make the coolest things and i love led strips
                </div>
                <div className="grid-stairs">
                  <img src={stairs} style={fullWidth} />
                </div>

                <div className="grid-bag">
                  <img src={bag} style={fullWidth} />
                </div>

                <div className="grid-slb">
                  <img src={slb} style={fullWidth} />
                </div>

                <div className="grid-slb-text">
                  talk about how in fact i love leds so much i used them in my internship presentation! at a corporate company! because why not! also mention how they clicked through to highlight current slide
                </div>
              </div>

              <div className="desk back-img flex">
                <div className="freelance">I'm available for freelance web design + development!</div>
                <div className="software-ft-button">Get in touch!</div>
              </div>
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

const fullWidth = {
  width: '100%'
}

const fullHeight = {
  height: '100%'
}