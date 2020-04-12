import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import './pages.css';

export class Photo extends Component {
  render() {
    return <div>
      <Navbar />
      <div className="photo">
        photo
      </div>
    </div>;
  }
}

export default Photo;