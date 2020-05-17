import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import MediaQuery from 'react-responsive'
import me1 from "../../dist/images/room.jpg";
import me2 from "../../dist/images/mirror.jpg";
import resume from "../../dist/images/Resume.pdf";
import './pages.css';

export class About extends Component {
  render() {
    return <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"ABOUT"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"ABOUT"} mobile={true} /></MediaQuery>

      {/* desktop  */}
      <MediaQuery minDeviceWidth={500}>
        <div className="page">
          <div className="appear">
            <div className="about-top">
              <img src={me1} className="about-top-img" />
              <div className="about-top-text">
                I AM A <c>SOFTWARE DEVELOPER</c>, <c>MUSICIAN</c>, AND <c>FILM PHOTOGRAPHER</c> BASED IN AUSTIN, TX. I RELEASED MY FIRST <c>SOLO MUSIC ALBUM</c> AT THE AGE OF 16 AND THE SECOND AT 18, MY FIRST <c>PHOTO COLLECTION</c> AT THE AGE OF 19, PLAYED MY FIRST <c>OFFICIAL SXSW SHOWCASE</c> AT THE AGE OF 20, BUILT MY FIRST <c>ART INSTALLATION FOR FORTRESS FESTIVAL</c> A MONTH LATER, AND HAD MY PHOTOGRAPHY FEATURED ON THE <c>COVER OF SPARK MAGAZINE</c>. I ALSO SERVE AS AN ADVISOR ON ALLEN ISD'S <c>CAREER AND TECHNICAL EDUCATION ADVISORY BOARD</c>.
              <br />
                <br />
              I CURRENTLY STUDY <c>COMPUTER SCIENCE AT THE UNIVERSITY OF TEXAS AT AUSTIN</c> AND AM INTERNING AS A <c>SOFTWARE ENGINEER AT VISA</c>.
            </div>
            </div>
            <div className="about-bottom">
              <div className="about-bottom-left-text">
                WEB DESIGN AND DEVELOPMENT BY ABHI VELAGA
            </div>
              <img src={me2} className="about-bottom-img" />
              <div className="about-bottom-text">
                ABHINAV.VELAGA@UTEXAS.EDU
              <br />
              @ABHI.VELAGA
              <br />
              @ABHI.FILM
              <br />
                <a href={resume} target='_blank'>[ RESUME ]</a>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>

      {/* mobile  */}
      <MediaQuery maxDeviceWidth={500}>
        <div className="page">
          <div className="appear">
            <img src={me1} className="about-top-img" />
            <div className="about-top-text">
              I AM A <c>SOFTWARE DEVELOPER</c>, <c>MUSICIAN</c>, AND <c>FILM PHOTOGRAPHER</c> BASED IN AUSTIN, TX. I RELEASED MY FIRST <c>SOLO MUSIC ALBUM</c> AT THE AGE OF 16 AND THE SECOND AT 18, MY FIRST <c>PHOTO COLLECTION</c> AT THE AGE OF 19, PLAYED MY FIRST <c>OFFICIAL SXSW SHOWCASE</c> AT THE AGE OF 20, BUILT MY FIRST <c>ART INSTALLATION FOR FORTRESS FESTIVAL</c> A MONTH LATER, AND HAD MY PHOTOGRAPHY FEATURED ON THE <c>COVER OF SPARK MAGAZINE</c>. I ALSO SERVE AS AN ADVISOR ON ALLEN ISD'S <c>CAREER AND TECHNICAL EDUCATION ADVISORY BOARD</c>.
              <br />
              <br />
              I CURRENTLY STUDY <c>COMPUTER SCIENCE AT THE UNIVERSITY OF TEXAS AT AUSTIN</c> AND AM INTERNING AS A <c>SOFTWARE ENGINEER AT VISA</c>.
            </div>
            <img src={me2} className="about-bottom-img" />

            <div className="about-bottom-text">
              ABHINAV.VELAGA@UTEXAS.EDU
              <br />
              @ABHI.VELAGA
              <br />
              @ABHI.FILM
              <br />
              <a href={resume} target='_blank'>[ RESUME ]</a>
            </div>

            <div className="about-bottom-left-text">
              WEB DESIGN AND DEVELOPMENT BY ABHI VELAGA
            </div>

          </div>
        </div>
      </MediaQuery>

    </div>;
  }
}

const mobileImg = {
  width: '100vw'
}

export default About;