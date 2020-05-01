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

const images = [
  miami1,
  miami2,
  miami3,
  miami4,
  miami6,
  miami7,
  miami8,
  miami9
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

        <MediaQuery minDeviceWidth={500}>
          <Navbar activeLink={"MIAMI"} />
          <div className="page">
            <div className="appear">

              <Columned columns={3} className="gallery">
                <img className="img" src={miami1} onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                <img className="img" src={miami2} onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                <img className="img" src={miami3} onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                <img className="img" src={miami4} onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                <img className="img" src={miami6} onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                <img className="img" src={miami7} onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                <img className="img" src={miami8} onClick={() => this.setState({ isOpen: true, photoIndex: 6 })} />
                <img className="img" src={miami9} onClick={() => this.setState({ isOpen: true, photoIndex: 7 })} />

              </Columned>

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
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500}>
          <Navbar />

          <div className="page">
            <div className="appear">

              <Columned columns={1}>
                <img className="mobile-img" src={miami1} onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                <img className="mobile-img" src={miami2} onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                <img className="mobile-img" src={miami3} onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                <img className="mobile-img" src={miami4} onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                <img className="mobile-img" src={miami5} onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
              </Columned>

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

        </MediaQuery>
      </div>
    )
  }
}

export default Miami

