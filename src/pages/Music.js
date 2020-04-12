import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import './pages.css';

export class Music extends Component {
  render() {
    return <div>
      <Navbar activeLink={"MUSIC"}/>
      <div className="about">
        Music
      </div>
    </div>;
  }
}

export default Music;