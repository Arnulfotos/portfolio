import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
// import './pages.css';
import Columned from "react-columned";

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

const images = [
  p1, p2, p3, p4, p5, p6, p7, p8, p9, p10
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
        <MediaQuery minDeviceWidth={500}>
          <Navbar activeLink={"PORTFOLIO"} />
          <div className="page">
            <div className="appear">

              <Columned columns={3} className="gallery">
                <img className="img" src={p1} onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                <img className="img" src={p2} onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                <img className="img" src={p3} onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                <img className="img" src={p4} onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                <img className="img" src={p5} onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                <img className="img" src={p6} onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                <img className="img" src={p7} onClick={() => this.setState({ isOpen: true, photoIndex: 6 })} />
                <img className="img" src={p8} onClick={() => this.setState({ isOpen: true, photoIndex: 7 })} />
                <img className="img" src={p9} onClick={() => this.setState({ isOpen: true, photoIndex: 8 })} />
                <img className="img" src={p10} onClick={() => this.setState({ isOpen: true, photoIndex: 9 })} />
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
              <img className="img" src={p1} onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                <img className="img" src={p2} onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                <img className="img" src={p3} onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                <img className="img" src={p4} onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                <img className="img" src={p5} onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                <img className="img" src={p6} onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                <img className="img" src={p7} onClick={() => this.setState({ isOpen: true, photoIndex: 6 })} />
                <img className="img" src={p8} onClick={() => this.setState({ isOpen: true, photoIndex: 7 })} />
                <img className="img" src={p9} onClick={() => this.setState({ isOpen: true, photoIndex: 8 })} />
                <img className="img" src={p10} onClick={() => this.setState({ isOpen: true, photoIndex: 9 })} />
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

export default UserVoid
