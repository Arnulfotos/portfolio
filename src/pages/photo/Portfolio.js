import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
import Columned from "react-columned";
import LazyLoad from 'react-lazy-load';

import p1 from '../../../dist/images/photos/portfolio/p1.jpg';
import p2 from '../../../dist/images/photos/portfolio/p2.jpg';
import p3 from '../../../dist/images/photos/portfolio/p3.jpg';
import p4 from '../../../dist/images/photos/portfolio/p4.jpg';
import p5 from '../../../dist/images/photos/portfolio/p5.jpg';
import p6 from '../../../dist/images/photos/portfolio/p6.jpg';
import p7 from '../../../dist/images/photos/portfolio/p7.jpg';
import p8 from '../../../dist/images/photos/portfolio/p8.jpg';
import p9 from '../../../dist/images/photos/portfolio/p9.jpg';
import p10 from '../../../dist/images/photos/portfolio/p10.jpg';

import p11 from '../../../dist/images/photos/portfolio/p11.jpg';
import p12 from '../../../dist/images/photos/portfolio/p12.jpg';
import p13 from '../../../dist/images/photos/portfolio/p13.jpg';
import p14 from '../../../dist/images/photos/portfolio/p14.jpg';
import p15 from '../../../dist/images/photos/portfolio/p15.jpg';
import p16 from '../../../dist/images/photos/portfolio/p16.jpg';
import p17 from '../../../dist/images/photos/portfolio/p17.jpg';
import p18 from '../../../dist/images/photos/portfolio/p18.jpg';
import p19 from '../../../dist/images/photos/portfolio/p19.jpg';
import p20 from '../../../dist/images/photos/portfolio/p20.jpg';

import p21 from '../../../dist/images/photos/portfolio/p21.jpg';
import p22 from '../../../dist/images/photos/portfolio/p22.jpg';
import p23 from '../../../dist/images/photos/portfolio/p23.jpg';
import p24 from '../../../dist/images/photos/portfolio/p24.jpg';
import p25 from '../../../dist/images/photos/portfolio/p25.jpg';
import p26 from '../../../dist/images/photos/portfolio/p26.jpg';
import p27 from '../../../dist/images/photos/portfolio/p27.jpg';
import p28 from '../../../dist/images/photos/portfolio/p28.jpg';
import p29 from '../../../dist/images/photos/portfolio/p29.jpg';
import p30 from '../../../dist/images/photos/portfolio/p30.jpg';

const images = [
  p1, 
  p2, 
  p3, 
  p4, 
  p5, 
  p6, 
  p7, 
  p8, 
  p9, 
  p10,
  p11, 
  p12, 
  p13, 
  p14, 
  p15, 
  p16, 
  p17, 
  p18, 
  p19, 
  p20,
  p21, 
  p22, 
  p23, 
  p24, 
  p25, 
  p26, 
  p27, 
  p28, 
  p29, 
  p30,
];

export class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div>
        <Navbar activeLink={"PORTFOLIO"} />
        <div className="page">
          <div className="appear">

            <MediaQuery minDeviceWidth={500}>
              <Columned columns={3} className="gallery">
                {images.map((value, index) => {
                  return <LazyLoad key={index}><img className="img" src={value} onClick={() => this.setState({ isOpen: true, photoIndex: index })} /></LazyLoad>
                })}
              </Columned>
            </MediaQuery>

            <MediaQuery maxDeviceWidth={500}>
              <Columned columns={1}>
                {images.map((value, index) => {
                  return  <LazyLoad key={index}><img className="img" src={value} onClick={() => this.setState({ isOpen: true, photoIndex: index })} /></LazyLoad>
                })}
              </Columned>
            </MediaQuery>

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
