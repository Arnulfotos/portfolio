import React, { Component } from "react";
import Navbar from '../layout/Navbar'
import './pages.css';

export class Code extends Component {
  render() {
    return<div>
      <Navbar activeLink={"CODE"}/>
      <div className="code">
        code
      </div>
    </div>;
  }
}

export default Code;