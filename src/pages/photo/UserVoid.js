import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { userVoidImages, mapImages } from './images.js';

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
            <MediaQuery minDeviceWidth={500}>{mapImages(3, userVoidImages)}</MediaQuery>
            <MediaQuery maxDeviceWidth={500}>{mapImages(1, userVoidImages)}</MediaQuery>
            {isOpen && (
              <Lightbox
                mainSrc={userVoidImages[photoIndex]}
                nextSrc={userVoidImages[(photoIndex + 1) % userVoidImages.length]}
                prevSrc={userVoidImages[(photoIndex + userVoidImages.length - 1) % userVoidImages.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + userVoidImages.length - 1) % userVoidImages.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % userVoidImages.length,
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