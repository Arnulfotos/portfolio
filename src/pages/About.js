import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import './pages.css';

export class About extends Component {
  render() {
    return <div>
      <Navbar activeLink={"ABOUT"} />
      <div className="page">
      <div className="appear">
          <center><h1>THIS WILL BE THE ABOUT PAGE</h1></center>
        </div>
      </div>
    </div>;
  }
}

export default About;