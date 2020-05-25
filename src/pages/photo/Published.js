import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
import { publishedImages, getHeight, getWidth } from './images.js';

import Columned from "react-columned";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';


export class Published extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  mapImages(cols, images) {
    return <Columned columns={cols} className="gallery">
      {images.map((value, index) => {
        return <LazyLoadImage key={index} className="img" src={value} onClick={() => this.setState({ isOpen: true, photoIndex: index })} effect="opacity" height={getHeight(value)} width={getWidth(value)} />
      })}
    </Columned>
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div>
        <MediaQuery minDeviceWidth={500}><Navbar activeLink={"PUBLISHED"} mobile={false} /></MediaQuery>
        <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"PUBLISHED"} mobile={true} /></MediaQuery>
        <div className="page">
          <div className="appear">
            <MediaQuery minDeviceWidth={500}>{this.mapImages(3, publishedImages)}</MediaQuery>
            <MediaQuery maxDeviceWidth={500}>{this.mapImages(1, publishedImages)}</MediaQuery>
            {isOpen && (
              <Lightbox
                mainSrc={publishedImages[photoIndex]}
                nextSrc={publishedImages[(photoIndex + 1) % publishedImages.length]}
                prevSrc={publishedImages[(photoIndex + publishedImages.length - 1) % publishedImages.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + publishedImages.length - 1) % publishedImages.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % publishedImages.length,
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

export default Published
