import React, { Component } from "react";
import './pages.css';

export class Splash extends Component {
  render() {
    return <div className="flex splash">
      <div className="center">
        <div className="title">
          ABHI VELAGA
        </div>
        <div className="splash-link-container">
          <a href="/photo"><div className="splash-links"><i>PHOTO</i></div></a>
          <a href="/music"><div className="splash-links"><i>MUSIC</i></div></a>
          <a href="/code"><div className="splash-links"><i>CODE</i></div></a>
          <a href="/about"><div className="splash-links"><i>ABOUT</i></div></a>
          <div className="loc">austin, tx.</div>
        </div>

        {/* put social links here at bottom of screen */}
      </div>
    </div>;
  }
}

export default Splash;