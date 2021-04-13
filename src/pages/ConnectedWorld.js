import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import MediaQuery from 'react-responsive';
import ScriptTag from 'react-script-tag';

export class ConnectedWorld extends Component {
  render() {
    return (
      <div className="appear">
        <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={false} /></MediaQuery>
        <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={true} /></MediaQuery>
        <ScriptTag type="text/javascript" src="sketch.js" />
      </div>
    )
  }
}

export default ConnectedWorld
