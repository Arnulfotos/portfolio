import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import indulgent from '../../dist/images/music/indulgent/drums.jpg';
import indulgentCover from '../../dist/images/music/indulgent/cover.jpg';

import mjf from '../../dist/images/music/mjf/mjf.jpg';
import mjfCover from '../../dist/images/music/mjf/cover.jpg';

import cg from '../../dist/images/music/cg/cg.jpg';
import cgCover from '../../dist/images/music/cg/cover.jpg';
import './pages.css';

const image = {
  width: '100vw'
}



export class Music extends Component {
  render() {
    return <div>
      <Navbar activeLink={"MUSIC"} />
      <div className="page">
        <div className="appear">
          <div className="grid">
            <div className="indulgent">
              {/* <img src={indulgent} style={image} /> */}
            </div>
            <div className="indulgent-cover">
              {/* <img src={indulgentCover} style={{ width: '100%' }} /> */}
            </div>
            
            <div className="mjf">
              {/* <img src={mjf} style={image} /> */}
            </div>
            <div className="mjf-cover">
              {/* <img src={mjfCover} style={{ width: '100%' }} /> */}
            </div>

            <div className="cg">
              {/* <img src={cg} style={image} /> */}
            </div>
            <div className="cg-cover">
              {/* <img src={cgCover} style={{ width: '100%' }} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Music;