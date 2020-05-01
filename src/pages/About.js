import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import me1 from "../../dist/images/room.jpg";
import me2 from "../../dist/images/mirror.jpg";
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
              ABHI VELAGA IS A SOFTWARE DEVELOPER, MUSICIAN, AND FILM PHOTOGRAPHER BASED IN AUSTIN, TX. HE RELEASED HIS FIRST SOLO MUSIC ALBUM AT THE AGE OF 16 AND THE SECOND AT 18, HIS FIRST PHOTO COLLECTION AT THE AGE OF 19, PLAYED HIS FIRST OFFICIAL SXSW SHOWCASE AT THE AGE OF 20, BUILT HIS FIRST ART INSTALLATION FOR FORTRESS FESTIVAL A MONTH LATER, AND HAD HIS PHOTOGRAPHY FEATURED ON THE COVER OF SPARK MAGAZINE.
              <br />
              <br />
              HE CURRENTLY STUDIES COMPUTER SCIENCE AT THE UNIVERSITY OF TEXAS AT AUSTIN AND IS INTERNING AS A SOFTWARE ENGINEER AT VISA.
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
              <bw />
              [ RESUME ]
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}


export default About;