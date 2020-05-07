import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import './pages.css';

import guitar1 from '../../dist/images/music/indulgent/guitar1.jpg';
import guitar2 from '../../dist/images/music/indulgent/guitar2.jpg';

const image = {
  width: '33vw'
}



export class Music extends Component {
  render() {
    return <div>
      <Navbar activeLink={"MUSIC"} />
      <div className="page">
        <div className="appear">
          <div className="grid">
            <div className="indulgent"></div>
            <div className="indulgent-cover"></div>
            <div className="indulgent-guitar1" />
            <div className="indulgent-guitar2" />

            <div className="mjf"></div>
            <div className="mjf-studio"></div>
            <div className="mjf-cover"></div>

            <div className="cg"></div>
            <div className="cg-cover"></div>
            <div className="cg-guitar"></div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Music;