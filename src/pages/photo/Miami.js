import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
import { miamiImages, mapImages } from './images.js';
import 'react-lazy-load-image-component/src/effects/opacity.css';

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
        <MediaQuery minDeviceWidth={500}><Navbar activeLink={"MIAMI"} mobile={false} /></MediaQuery>
        <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"MIAMI"} mobile={true} /></MediaQuery>
        <div className="page">
          <div className="appear">
            <MediaQuery minDeviceWidth={500}>{mapImages(3, miamiImages)}</MediaQuery>
            <MediaQuery maxDeviceWidth={500}>{mapImages(1, miamiImages)}</MediaQuery>
            {isOpen && (
              <Lightbox
                mainSrc={miamiImages[photoIndex]}
                nextSrc={miamiImages[(photoIndex + 1) % miamiImages.length]}
                prevSrc={miamiImages[(photoIndex + miamiImages.length - 1) % miamiImages.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + miamiImages.length - 1) % miamiImages.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % miamiImages.length,
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

