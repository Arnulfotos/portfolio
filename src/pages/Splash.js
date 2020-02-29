import React, { Component } from "react";
import '../App.css';

export class Splash extends Component {
  render() {
    return <div className="splash">
      <div className="splash-link">
        <a href="/about" className="link">ABHI VELAGA</a>
      </div>
      <div className="splash-link">
      <a href="/photo" className="link">PHOTO</a>
      </div>
      <div className="splash-link">
      <a href="/music" className="link">MUSIC</a>
      </div>
      <div className="splash-link">
      <a href="/code" className="link">CODE</a>
      </div>
    </div>;
  }
}

export default Splash;