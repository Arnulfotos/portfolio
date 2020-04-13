import React, { Component } from "react";
import MediaQuery from 'react-responsive'
// import drumming from '../../dist/images/drumming.gif'
import './pages.css';

export class Splash extends Component {
  render() {
    return (
      <div>

        {/* desktop */}
        <MediaQuery minDeviceWidth={500} >
          <div className="flex splash">
            <div>
              <div className="title splash-appear">
                ABHI VELAGA
              </div>
              <div className="splash-link-container">
                <a href="/photo"><div className="splash-links appear-first">PHOTO</div></a>
                <a href="/music"><div className="splash-links appear-second">MUSIC</div></a>
                <a href="/software"><div className="splash-links appear-third">SOFTWARE</div></a>
                <a href="/about"><div className="splash-links appear-fourth">ABOUT</div></a>
                <div className="loc appear-fifth">austin, tx.</div>
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
                <a href="/software"><div className="mobile-splash-links">SOFTWARE</div></a>
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