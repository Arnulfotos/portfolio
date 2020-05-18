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
import desk from '../../dist/images/software/desk.png';

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
                <div className="software-ft-info">this is the description this is the description this is the description this is the description this is the description this is the description this is the description this is the description </div>
                <a href="https://bandtogether.events" target='_blank'><div className="software-ft-button">VIEW</div></a>
              </div>

              <div className="software2 software-flex">
                <div className="software2-flex">
                  <img src={dot_terrain} className="software2-img" />
                  <img src={sin} className="software2-img" />
                  <img src={evolution} className="software2-img" />
                </div>
                <div className="software-ft-title">COMPUTER GRAPHICS</div>
                <div className="software-ft-info">i enjoy exploring more creative uses for computer science in my free time. this is some of my graphics work created with processing</div>
                <div className="software-ft-button">SEE MORE</div>
              </div>

              <div className="software3 back-img software-flex">
                <img src={leaseEasy} className="software-ft" />
                <div className="software-ft-title">LEASE EASY</div>
                <div className="software-ft-subtitle">ui design</div>
                <div className="software-ft-info">this is the description this is the description this is the description this is the description this is the description this is the description this is the description this is the description </div>
              </div>

              < img src={led_zoo} style={fullWidth} className="led" />
              <div className="software-grid">
                <div className="software-grid-text">
                  <div className="grid-text-title">LED STRIP PROGRAMMING</div>
                this is the descirp tion this is the descirp tion this is the descirp tion this is the descirp tion this is the descirp tion this is the descirp tion
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
                  talking about how i used it on my presentation talking about how i used it on my presentation talking about how i used it on my presentation talking about how i used it on my presentation talking about how i used it on my presentation
                </div>
              </div>

              <div className="desk back-img flex">
                <div className="freelance">I'm available for freelance web design + development!</div>
                <div className="software-ft-button">Get in touch!</div>
              </div>

              {/* <div className="software4 back-img"></div> */}

              {/* <div className="title software-title">SOFTWARE DEVELOPMENT</div>
              <div className="software-text">i'm a computer science major at ut austin with a passion for front end/ux/ui. i have experience with react and angular and love to make websites in my free time. this is some of the work ive developed.</div>
              <img src={slb} style={setHeight} />
              <img src={bandTogether} style={setHeight} />
              <img src={bandTogether1} style={setHeight} />

              <div className="title software-title">COMPUTER GRAPHICS</div>
              <div className="software-text">i enjoy exploring more creative uses for computer science in my free time. this is some of my graphics work created with processing</div>
              <img src={dot_terrain} style={setHeight} />
              <img src={sin} style={setHeight} />
              <img src={color1} style={setHeight} />
              <img src={evolution} style={setHeight} />
              <img src={ball} style={setHeight} />
              <img src={color_animated} style={setHeight} />
              <img src={color2} style={setHeight} />

              <div className="title software-title">LEDs/ARDUINO/RASPBERRY PI</div>
              <div className="software-text">i also love using software alongside electronics, especially individually adressable LED strips, to interact with the physical world.</div>
              <img src={led_zoo} style={setHeight} /> */}

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