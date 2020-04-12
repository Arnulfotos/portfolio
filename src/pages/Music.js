import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import './pages.css';

export class Music extends Component {
  render() {
    return <div>
      <Navbar activeLink={"MUSIC"}/>
      <div className="page">
      <div className="appear">
          <center><h1>THIS WILL BE THE MUSIC PAGE</h1></center>
        </div>
      </div>
    </div>;
  }
}

export default Music;