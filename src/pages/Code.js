import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import MediaQuery from 'react-responsive'
import './pages.css';

export class Code extends Component {

  render() {
    return <div>
      <Navbar activeLink={"CODE"} />
      <div className="page">
        <div className="appear">

          <MediaQuery minDeviceWidth={480} >
            <h1>You are a desktop or laptop</h1>
          </MediaQuery>

          <MediaQuery maxDeviceWidth={480} >
            <h1>you are on mobile</h1>
          </MediaQuery>
        </div>
      </div>
    </div>;
  }
}

export default Code;