import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
const axios = require("axios").default;

export class Hi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      on: false
    };
  }

  onClick = () => {
    this.setState({
      on: true
    })
    let url = "http://72.182.112.17:8000/led/";
    axios
      .get(
        url
      )
      .then(res => {
        this.setState({
          sent: true,
          on: false
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (<div className="page appear">
      <Navbar activeLink={"HI"} />

      <div className="hi">
        <div className="title">say hi to me in realtime</div>
        hi, welcome to my site. clicking this button runs an animation on a led strip that's physically at my desk.
        <div className="hi-button" onClick={this.onClick} style={this.state.on ? on : off}>hello</div>
        { this.state.sent && <div className="appear">message received</div>}
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