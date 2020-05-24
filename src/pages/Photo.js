import React, { Component } from "react";
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../layout/Navbar'
import './pages.css';
import Portfolio from '../../dist/images/photos/portfolio/p2.jpg';
import Miami from '../../dist/images/photos/miami/miami1.jpg';
import User from '../../dist/images/photos/uservoid/uservoid1.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export class Photo extends Component {

  render() {
    return <div>
      <MediaQuery minDeviceWidth={500}>
      <Navbar activeLink={"PHOTO"} mobile={false} />
        <div className="page appear photo-flex">
          <a href={"/portfolio"}>
            <div style={imageDiv}>
              <LazyLoadImage effect="opacity" src={Portfolio} style={image} />
              <div style={text}>PORTFOLIO</div>
            </div>
          </a>

          <a href={"/miamivice"}>
            <div style={imageDiv}>
              <LazyLoadImage effect="opacity" src={Miami} style={image} />
              <div style={text}>MIAMI VICE COCAINE DREAM</div>
            </div>
          </a>

          <a href={"/uservoid"}>
            <div style={imageDiv}>
              <LazyLoadImage effect="opacity" src={User} style={image} />
              <div style={text}>USER VOID</div>
            </div>
          </a>
        </div>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={500}>
      <Navbar activeLink={"PHOTO"} mobile={true} />
        <div style={mobilePage}>
          <div className="appear photo-flex">
            <a href={"/portfolio"}>
              <div style={mobileImageDiv}>
                <LazyLoadImage effect="opacity" src={Portfolio} style={mobileImage} />
                <div style={mobileText}>PORTFOLIO</div>
              </div>
            </a>

            <a href={"/miamivice"}>
              <div style={mobileImageDiv}>
                <LazyLoadImage effect="opacity" src={Miami} style={mobileImage} />
                <div style={mobileText}>MIAMI VICE COCAINE DREAM</div>
              </div>
            </a>

            <a href={"/uservoid"}>
              <div style={mobileImageDiv}>
                <LazyLoadImage effect="opacity" src={User} style={mobileImage} />
                <div style={mobileText}>USER VOID</div>
              </div>
            </a>
          </div>
        </div>
      </MediaQuery>
    </div>;
  }
}

const mobilePage = {
  width: '290vw',
  backgroundColor: 'black',
  minHeight: '100vh'
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

const mobileImage = {
  height: '75vh'
}

const mobileImageDiv = {
  width: '90vw',
  height: '80vh',
  overflow: 'hidden',
  marginRight: '20px'
}

const text = {
  color: 'white',
  fontSize: '30px',
  marginLeft: '1px'
}

const mobileText = {
  color: 'white',
  fontSize: '18px',
  marginLeft: '1px'
}

export default Photo;