import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
// import './pages.css';
import Columned from "react-columned";

import miami1 from '../../../dist/images/photos/miami/miami1.jpg';
import miami2 from '../../../dist/images/photos/miami/miami2.jpg';
import miami3 from '../../../dist/images/photos/miami/miami3.jpg';
import miami4 from '../../../dist/images/photos/miami/miami4.jpg';
import miami5 from '../../../dist/images/photos/miami/miami5.jpg';

import miami6 from '../../../dist/images/photos/miami/miami6.jpg';
import miami7 from '../../../dist/images/photos/miami/miami7.jpg';
import miami8 from '../../../dist/images/photos/miami/miami8.jpg';
import miami9 from '../../../dist/images/photos/miami/miami9.jpg';
import miami10 from '../../../dist/images/photos/miami/miami10.jpg';

import miami11 from '../../../dist/images/photos/miami/miami11.jpg';
import miami12 from '../../../dist/images/photos/miami/miami12.jpg';
import miami13 from '../../../dist/images/photos/miami/miami13.jpg';
import miami14 from '../../../dist/images/photos/miami/miami14.jpg';
import miami15 from '../../../dist/images/photos/miami/miami15.jpg';

import miami16 from '../../../dist/images/photos/miami/miami16.jpg';
import miami17 from '../../../dist/images/photos/miami/miami17.jpg';
import miami18 from '../../../dist/images/photos/miami/miami18.jpg';
import miami19 from '../../../dist/images/photos/miami/miami19.jpg';
import miami20 from '../../../dist/images/photos/miami/miami20.jpg';

import miami21 from '../../../dist/images/photos/miami/miami21.jpg';
import miami22 from '../../../dist/images/photos/miami/miami22.jpg';
import miami23 from '../../../dist/images/photos/miami/miami23.jpg';
import miami24 from '../../../dist/images/photos/miami/miami24.jpg';
import miami25 from '../../../dist/images/photos/miami/miami25.jpg';

import miami26 from '../../../dist/images/photos/miami/miami26.jpg';
import miami27 from '../../../dist/images/photos/miami/miami27.jpg';
import miami28 from '../../../dist/images/photos/miami/miami28.jpg';
import miami29 from '../../../dist/images/photos/miami/miami29.jpg';
import miami30 from '../../../dist/images/photos/miami/miami30.jpg';

const images = [
  miami1,
  miami2,
  miami3,
  miami4,
  miami5,
  miami6,
  miami7,
  miami8,
  miami9,
  miami10,

  miami11,
  miami12,
  miami13,
  miami14,
  miami15,
  miami16,
  miami17,
  miami18,
  miami19,
  miami20,

  miami21,
  miami22,
  miami23,
  miami24,
  miami25,
  miami26,
  miami27,
  miami28,
  miami29,
  miami30
];

export class Miami extends Component {
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
        <Navbar activeLink={"MIAMI"} />
        <div className="page">
          <div className="appear">

            <MediaQuery minDeviceWidth={500}>
              <Columned columns={3} className="gallery">
                {images.map((value, index) => {
                  return <img className="img" key={index} src={value} onClick={() => this.setState({ isOpen: true, photoIndex: index })} />
                })}
              </Columned>
            </MediaQuery>

            <MediaQuery maxDeviceWidth={500}>
              <Columned columns={1}>
                {images.map((value, index) => {
                  return <img className="img" key={index} src={value} onClick={() => this.setState({ isOpen: true, photoIndex: index })} />
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

export default Miami

