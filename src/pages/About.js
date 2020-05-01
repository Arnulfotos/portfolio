import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import me1 from "../../dist/images/room.jpg";
import me2 from "../../dist/images/mirror.jpg";
import resume from "../../dist/images/Resume.pdf";
import './pages.css';

export class About extends Component {
  render() {
    return <div>
      <Navbar activeLink={"ABOUT"} />
      <div className="page">
        <div className="appear">
          <div className="about-top">
            <img src={me1} className="about-top-img" />
            <div className="about-top-text">
              ABHI VELAGA IS A <c>SOFTWARE DEVELOPER</c>, <c>MUSICIAN</c>, AND <c>FILM PHOTOGRAPHER</c> BASED IN AUSTIN, TX. HE RELEASED HIS FIRST <c>SOLO MUSIC ALBUM</c> AT THE AGE OF 16 AND THE SECOND AT 18, HIS FIRST <c>PHOTO COLLECTION</c> AT THE AGE OF 19, PLAYED HIS FIRST <c>OFFICIAL SXSW SHOWCASE</c> AT THE AGE OF 20, BUILT HIS FIRST <c>ART INSTALLATION FOR FORTRESS FESTIVAL</c> A MONTH LATER, AND HAD HIS PHOTOGRAPHY FEATURED ON THE <c>COVER OF SPARK MAGAZINE</c>. HE ALSO SERVES AS AN ADVISOR ON ALLEN ISD'S <c>CAREER AND TECHNICAL EDUCATION ADVISORY BOARD</c>.
              <br />
              <br />
              HE CURRENTLY STUDIES <c>COMPUTER SCIENCE AT THE UNIVERSITY OF TEXAS AT AUSTIN</c> AND IS INTERNING AS A <c>SOFTWARE ENGINEER AT VISA</c>.
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
    </div>;
  }
}


export default About;