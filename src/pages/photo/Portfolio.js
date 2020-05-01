import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
// import './pages.css';
import Columned from "react-columned";

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navbar activeLink={"PHOTO"} />
        <div className="page">
          portfolio
        </div>
      </div>
    )
  }
}

export default Portfolio
