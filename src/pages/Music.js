import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import './pages.css';

import guitar1 from '../../dist/images/music/indulgent/guitar1.jpg';
import guitar2 from '../../dist/images/music/indulgent/guitar2.jpg';

const title = {
  color: 'white',
  fontSize: '200px',
  textAlign: 'center'
}

const mjfTitle = {
  color: 'black',
  fontSize: '100px',
  textAlign: 'center',
  lineHeight: '90px'
}

const cgTitle = {
  color: 'white',
  fontSize: '150px',
  textAlign: 'right',
  lineHeight: '130px'
}



export class Music extends Component {
  render() {
    return <div>
      <Navbar activeLink={"MUSIC"} />
      <div className="page">
        <div className="appear">
          <div className="grid">
            <div className="indulgent">
              <div style={title}>INDULGENT</div>
            </div>
            <div className="indulgent-cover"></div>
            <div className="indulgent-guitar1" />
            <div className="indulgent-guitar2" />

            <div className="mjf">
            <div style={mjfTitle}>MERRY JANE & THE FONDAS</div>
            </div>
            <div className="mjf-studio"></div>
            <div className="mjf-cover"></div>

            <div className="cg">
              <div style={cgTitle}>CREAM GENIE</div>
            </div>
            <div className="cg-cover"></div>
            <div className="cg-guitar"></div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Music;