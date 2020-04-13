import React, { Component } from "react";
import MediaQuery from 'react-responsive'
import './pages.css';

export class Splash extends Component {
  render() {
    return (
      <div>

        {/* desktop */}
        <MediaQuery minDeviceWidth={500} >
          <div className="flex splash">
            <div className="splash-appear">
              <div className="title">
                ABHI VELAGA
              </div>
              <div className="splash-link-container">
                <a href="/photo"><div className="splash-links">PHOTO</div></a>
                <a href="/music"><div className="splash-links">MUSIC</div></a>
                <a href="/code"><div className="splash-links">CODE</div></a>
                <a href="/about"><div className="splash-links">ABOUT</div></a>
                <div className="loc">austin, tx.</div>
              </div>

              {/* put social links here at bottom of screen */}
            </div>
          </div>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500} >
          <div className="flex splash">
            <div className="splash-appear">
              <div className="mobile-title">
                ABHI VELAGA
              </div>
                <a href="/photo"><div className="mobile-splash-links">PHOTO</div></a>
                <a href="/music"><div className="mobile-splash-links">MUSIC</div></a>
                <a href="/code"><div className="mobile-splash-links">CODE</div></a>
                <a href="/about"><div className="mobile-splash-links">ABOUT</div></a>

              {/* put social links here at bottom of screen */}
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Splash;