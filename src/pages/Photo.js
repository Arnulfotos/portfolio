import React, { Component } from "react";
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../layout/Navbar'
import './pages.css';
import Portfolio from '../../dist/images/photos/portfolio/p2.jpg';
import Miami from '../../dist/images/photos/miami/miami1.jpg';
import User from '../../dist/images/photos/uservoid/uservoid1.jpg';
import Published from '../../dist/images/photos/published/2.jpg';
import { portfolioImages, miamiImages, userVoidImages, publishedImages } from './photo/images.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export class Photo extends Component {

  render() {
    return <div>
      <MediaQuery minDeviceWidth={500}>
        <Navbar activeLink={"PHOTO"} mobile={false} />

        <div className="page appear photo-flex" >

          <a href={"/portfolio"}>
            <div style={imageDiv}>
            <div className="center-title">PORTFOLIO</div>
              <div className="menu-fadein ">
                <img src={portfolioImages[0]} className="f1" />
                <img src={portfolioImages[1]} className="f2" />
                <img src={portfolioImages[2]} className="f3" />
                <img src={portfolioImages[3]} className="f4" />
                <img src={portfolioImages[4]} className="f5" />
                <img src={portfolioImages[5]} className="f6" />
                <img src={portfolioImages[6]} className="f7" />
                <img src={portfolioImages[7]} className="f8" />
              </div>
              {/* <LazyLoadImage effect="opacity" src={Portfolio} className="center-img" /> */}
            </div>
            {/* <div style={text}>PORTFOLIO</div> */}
            
          </a>

          <a href={"/miamivice"}>
            <div style={imageDiv}>
            <div className="center-title">
              <div>MIAMI VICE COCAINE DREAM</div>
              <div className="photo-subtitle">2018 - 2019</div>
            </div>
            <div className="menu-fadein ">
                <img src={miamiImages[0]} className="f1" />
                <img src={miamiImages[1]} className="f2" />
                <img src={miamiImages[2]} className="f3" />
                <img src={miamiImages[3]} className="f4" />
                <img src={miamiImages[4]} className="f5" />
                <img src={miamiImages[5]} className="f6" />
                <img src={miamiImages[6]} className="f7" />
                <img src={miamiImages[7]} className="f8" />
              </div>
              {/* <LazyLoadImage effect="opacity" src={Miami} className="center-img" /> */}
            </div>
            {/* <div style={text}>MIAMI VICE COCAINE DREAM</div>
            <div style={subText}>2018 - 2019</div> */}
          </a>

          <a href={"/uservoid"}>
            <div style={imageDiv}>
            <div className="center-title">
              <div>USER VOID</div>
              <div className="photo-subtitle">2019 - PRESENT</div>
              </div>
            <div className="menu-fadein ">
                <img src={userVoidImages[0]} className="f1" />
                <img src={userVoidImages[1]} className="f2" />
                <img src={userVoidImages[2]} className="f3" />
                <img src={userVoidImages[3]} className="f4" />
                <img src={userVoidImages[4]} className="f5" />
                <img src={userVoidImages[5]} className="f6" />
                <img src={userVoidImages[6]} className="f7" />
                <img src={userVoidImages[7]} className="f8" />
              </div>
              {/* <LazyLoadImage effect="opacity" src={User} className="center-img" /> */}
            </div>
            {/* <div style={text}>USER VOID</div>
            <div style={subText}>2019 - PRESENT</div> */}
          </a>

          <a href={"/published"}>
            <div style={imageDiv}>
            <div className="center-title">PUBLISHED WORK</div>
            <div className="menu-fadein ">
                <img src={publishedImages[0]} className="f1" />
                <img src={publishedImages[1]} className="f2" />
                <img src={publishedImages[2]} className="f3" />
                <img src={publishedImages[3]} className="f4" />
                <img src={publishedImages[4]} className="f5" />
                <img src={publishedImages[5]} className="f6" />
                <img src={publishedImages[6]} className="f7" />
                <img src={publishedImages[7]} className="f8" />
              </div>
              {/* <LazyLoadImage effect="opacity" src={Published} className="center-img" /> */}
            </div>
            {/* <div style={text}>PUBLISHED WORK</div> */}
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
                <div style={subText}>2018 - 2019</div>
              </div>
            </a>

            <a href={"/uservoid"}>
              <div style={mobileImageDiv}>
                <LazyLoadImage effect="opacity" src={User} style={mobileImage} />
                <div style={mobileText}>USER VOID</div>
                <div style={subText}>2019 - PRESENT</div>
              </div>
            </a>

            <a href={"/published"}>
              <div style={mobileImageDiv}>
                <LazyLoadImage effect="opacity" src={Published} style={mobileImage} />
                <div style={mobileText}>PUBLISHED WORK</div>
              </div>
            </a>
          </div>
        </div>
      </MediaQuery>
    </div>;
  }
}

const subText = {
  fontSize: '10px'
}

const mobilePage = {
  width: '290vw',
  backgroundColor: 'black',
  minHeight: '100vh'
}

const image = {
  height: '88vh'
}

const imageDiv = {
  width: '24vw',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative'
}

const mobileImage = {
  height: '75vh'
}

const mobileImageDiv = {
  width: '90vw',
  height: '85vh',
  overflow: 'hidden',
  marginRight: '20px'
}

const text = {
  color: 'white',
  fontSize: '15px',
  marginLeft: '1px'
}

const mobileText = {
  color: 'white',
  fontSize: '18px',
  marginLeft: '1px'
}

export default Photo;