import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../layout/Navbar'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
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

export class Software extends Component {

  getHeight(image) {
    var img = new Image();
    img.onload = function () {
      return this.height;
    }
    img.src = image;
  }

  render() {
    return <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"SOFTWARE"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"SOFTWARE"} mobile={true} /></MediaQuery>
      <div className="page">
        <div className="appear">

          <div className="software">
            <div className="software-intro">
              Hi! I'm a Computer Science undergraduate at <ut>The University of Texas at Austin</ut>. I love software development and UI/UX design and am working towards becoming a full time front-end developer. I also study fine arts as a minor and enjoy finding ways to intersect the two passions with creative tools such as <pi>Raspberry PI</pi>, <arduino>Arduino</arduino>, and <processing>Processing</processing>. This is a selected collection of my programming and web related projects. If you're looking for more details about my technical skills, you can find it on my <a href={resume} target='_blank'>resume</a> and <a href="https://www.linkedin.com/in/abhivelaga/" target='_blank'>linkedin</a>.
              </div>

            <div className="software1 back-img software-flex">
              <LazyLoadImage effect="opacity" src={bandTogether} className="software-ft" />
              <div className="software-ft-title">BAND TOGETHER</div>
              <div className="software-ft-subtitle">ui design + front end development</div>
              <div className="software-ft-info">I designed and developed the front end for Band Together, a responsive web app that helps users easily find information about upcoming concerts.</div>
              <a href="https://bandtogether.events" target='_blank'><div className="software-ft-button">VIEW</div></a>
            </div>

            <div className="software2 software-flex">
              <div className="software2-flex">
                <LazyLoadImage effect="opacity" src={dot_terrain} className="software2-img" />
                <LazyLoadImage effect="opacity" src={sin} className="software2-img" />
                <LazyLoadImage effect="opacity" src={evolution} className="software2-img" />
              </div>
              <div className="software-ft-title">COMPUTER GRAPHICS</div>
              <div className="software-ft-info">I designed and programmed a Darwinism/evolution simulation, natural tree drawing algorithms, terrain generation, multiple games, and generative art algorithms with Processing.</div>
              <div className="software-ft-button">SEE MORE</div>
            </div>

            <div className="software3 back-img software-flex">
              <LazyLoadImage effect="opacity" src={leaseEasy} className="software-ft" />
              <div className="software-ft-title">LEASE EASY</div>
              <div className="software-ft-subtitle">ui design</div>
              <div className="software-ft-info">Lease Easy is a student run startup currently part of UT Austin's <a href="http://longhornstartup.com/portfolio-spring-2020/">Longhorn Startup Lab</a>. I designed an interface that makes it easy for users to intuitively search for apartments that meet their requirements and presents the most important information clearly up front.</div>
            </div>

            <LazyLoadImage effect="opacity" src={led_zoo} width="100%" className="led" height={this.getHeight(led_zoo)} />

            <div className="software-grid">
              <div className="software-grid-text flex">
                <div className="grid-text-title">LED STRIP PROGRAMMING</div>
                <div>
                  I love finding ways to intersect my passions for computer science with that of fine arts and coding LED strips with Arduinos has been a great way to do so. I've built and programmed commissioned interactive installations for music shows, such as Fortress Festival in Ft. Worth, TX in April 2019, an interactive "zoo" with "animals" that require daily human interaction in order to stay alive and breed, motion responsive staircase and doorways, and even stitched custom coded strips to my backpack for maximum visibility when riding my electric skateboard at night. I also created a <a href="/hi">button</a> that allows visitors to say hello to me in realtime by strobing LEDs at my desk.
                </div>
              </div>
              <div className="grid-stairs">
                <LazyLoadImage effect="opacity" src={stairs} width="100%" height={this.getHeight(stairs)} />
              </div>

              <div className="grid-bag">
                <LazyLoadImage effect="opacity" src={bag} width="100%" height={this.getHeight(bag)} />
              </div>
            </div>

            <div className="slb flex">
              <LazyLoadImage effect="opacity" src={slb} height={this.getHeight(slb)} className="slb-img"/>
              {/* <img src={slb} className="slb-img" /> */}
              <div className="slb-text">
                I even integrated LEDs into my final presentation for my software engineer internship at Schlumberger. I used a button to control animations around different sections of the poster as I talked in order to draw focus to the corresponding content I was referring to.
                </div>
            </div>

            <div className="desk back-img flex">
              <div className="freelance">I'm available for freelance web design + development!</div>
              <div className="software-ft-info">I create unique websites for desktop + mobile with the ability for you to edit your own content, along with hosting, and continuous support. If you have an idea, need a developer, or just want to say hi, shoot me a message!</div>
              <a href="mailto:abhinav.velaga@utexas.edu"><div className="software-ft-button">Get in touch!</div></a>
            </div>
          </div>
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