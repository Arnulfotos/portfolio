import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
import { portfolioImages, mapImages } from './images.js';
import 'react-lazy-load-image-component/src/effects/opacity.css';

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
        <MediaQuery minDeviceWidth={500}><Navbar activeLink={"PORTFOLIO"} mobile={false} /></MediaQuery>
        <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"PORTFOLIO"} mobile={true} /></MediaQuery>
        <div className="page">
          <div className="appear">

            <MediaQuery minDeviceWidth={500}>{mapImages(3, portfolioImages)}</MediaQuery>
            <MediaQuery maxDeviceWidth={500}>{mapImages(1, portfolioImages)}</MediaQuery>

            {isOpen && (
              <Lightbox
                mainSrc={portfolioImages[photoIndex]}
                nextSrc={portfolioImages[(photoIndex + 1) % portfolioImages.length]}
                prevSrc={portfolioImages[(photoIndex + portfolioImages.length - 1) % portfolioImages.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + portfolioImages.length - 1) % portfolioImages.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % portfolioImages.length,
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
