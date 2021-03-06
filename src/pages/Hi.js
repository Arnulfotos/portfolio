import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
const axios = require("axios").default;
import gif from '../../dist/images/hi.gif';
import hi from '../../dist/images/hi.mp4';
import MediaQuery from 'react-responsive';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export class Hi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      on: false,
      error: false
    };
  }

  onClick = () => {
    this.setState({
      on: true
    })
    let url = "https://abhivelaga.com/led";
    axios
      .get(
        url
      )
      .then(res => {
        this.setState({
          sent: true,
          on: false
        });
      })
      .catch(err => {
        console.log("god dang it who broke it now")
        this.setState({
          error: true
        });
      });
  }

  render() {
    return (<div className="page appear">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HI"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HI"} mobile={true} /></MediaQuery>
      <div className="hi">
        <div className="title">say hi to me in realtime</div>
        hi, welcome to my site. clicking this button runs an animation on the led strip at my desk.
        <div className="hi-button" onClick={this.onClick} style={this.state.error ? error : this.state.on ? on : off}>hello</div>
        {this.state.sent && <div className="appear">message received</div>}
        {this.state.error && <div className="appear">i got an error, it looks like someone broke it :( maybe try again tomorrow</div>}
      </div>
      <div className="flex">
        <video playsInline autoPlay muted loop className="hi-gif">
          <source src={hi} type="video/mp4" />
        </video>
      </div>
    </div>
    )
  }
}

export default Hi

const on = {
  backgroundColor: 'rgb(0, 212, 0)'
}

const off = {
  backgroundColor: 'purple'
}

const error = {
  backgroundColor: 'red'
}