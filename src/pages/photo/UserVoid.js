import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
import Columned from "react-columned";
import LazyLoad from 'react-lazy-load';

import p1 from '../../../dist/images/photos/uservoid/uservoid1.jpg';
import p2 from '../../../dist/images/photos/uservoid/uservoid2.jpg';
import p3 from '../../../dist/images/photos/uservoid/uservoid3.jpg';
import p4 from '../../../dist/images/photos/uservoid/uservoid4.jpg';
import p5 from '../../../dist/images/photos/uservoid/uservoid5.jpg';
import p6 from '../../../dist/images/photos/uservoid/uservoid6.jpg';
import p7 from '../../../dist/images/photos/uservoid/uservoid7.jpg';
import p8 from '../../../dist/images/photos/uservoid/uservoid8.jpg';
import p9 from '../../../dist/images/photos/uservoid/uservoid9.jpg';
import p10 from '../../../dist/images/photos/uservoid/uservoid10.jpg';

import p11 from '../../../dist/images/photos/uservoid/uservoid11.jpg';
import p12 from '../../../dist/images/photos/uservoid/uservoid12.jpg';
import p13 from '../../../dist/images/photos/uservoid/uservoid13.jpg';
import p14 from '../../../dist/images/photos/uservoid/uservoid14.jpg';
import p15 from '../../../dist/images/photos/uservoid/uservoid15.jpg';
import p16 from '../../../dist/images/photos/uservoid/uservoid16.jpg';
import p17 from '../../../dist/images/photos/uservoid/uservoid17.jpg';
import p18 from '../../../dist/images/photos/uservoid/uservoid18.jpg';
import p19 from '../../../dist/images/photos/uservoid/uservoid19.jpg';
import p20 from '../../../dist/images/photos/uservoid/uservoid20.jpg';

import p21 from '../../../dist/images/photos/uservoid/uservoid21.jpg';

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
  p21
];

export class UserVoid extends Component {
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
        <MediaQuery minDeviceWidth={500}><Navbar activeLink={"USERVOID"} mobile={false} /></MediaQuery>
        <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"USERVOID"} mobile={true} /></MediaQuery>
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
                  return <LazyLoad key={index}><img className="img" src={value} onClick={() => this.setState({ isOpen: true, photoIndex: index })} /></LazyLoad>
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

export default UserVoid
