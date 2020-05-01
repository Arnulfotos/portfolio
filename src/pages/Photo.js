import React, { Component } from "react";
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../layout/Navbar'
import './pages.css';
import Portfolio from '../../dist/images/photos/portfolio/p2.jpg';
import Miami from '../../dist/images/photos/miami/miami1.jpg';
import User from '../../dist/images/photos/uservoid/uservoid1.jpg';

export class Photo extends Component {

  render() {
    return <div>
      <Navbar activeLink={"PHOTO"} />
      <div className="page appear photo-flex">
        <a href={"/portfolio"}>
          <div style={imageDiv}>
            <img src={Portfolio} style={image} />
            <div style={text}>PORTFOLIO</div>
          </div>
        </a>

        <a href={"/miamivice"}>
          <div style={imageDiv}>
            <img src={Miami} style={image} />
            <div style={text}>MIAMI VICE COCAINE DREAM</div>
          </div>
        </a>

        <a href={"/uservoid"}>
          <div style={imageDiv}>
            <img src={User} style={image} />
            <div style={text}>USER VOID</div>
          </div>
        </a>
      </div>
    </div>;
  }
}

const image = {
  height: '90vh'
}

const imageDiv = {
  width: '30vw',
  height: '95vh',
  overflow: 'hidden',
  marginRight: '20px'
}

const text = {
  color: 'white',
  fontSize: '30px',
  marginLeft: '1px'
}

export default Photo;