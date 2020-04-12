import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import './pages.css';

export class About extends Component {
  render() {
    return <div>
      <Navbar activeLink={"ABOUT"} />
        about
    </div>;
  }
}

export default About;