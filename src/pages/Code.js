import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import './pages.css';

export class Code extends Component {
  render() {
    return<div>
      <Navbar activeLink={"CODE"}/>
      <div className="page">
      <div className="appear">
          <center><h1>THIS WILL BE THE CODE PAGE</h1></center>
        </div>
      </div>
    </div>;
  }
}

export default Code;