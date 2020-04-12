import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import './pages.css';

export class Photo extends Component {
  render() {
    return <div>
      <Navbar activeLink={"PHOTO"}/>
      <div className="page">
        photo
      </div>
    </div>;
  }
}

export default Photo;