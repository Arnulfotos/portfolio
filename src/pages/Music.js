import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

import Navbar from '../layout/Navbar'

import './pages.css';

import guitar1 from '../../dist/images/music/indulgent/guitar1.jpg';
import guitar2 from '../../dist/images/music/indulgent/guitar2.jpg';

const title = {
  color: 'white',
  fontSize: '200px',
  textAlign: 'center'
}

const mjfTitle = {
  color: 'black',
  fontSize: '100px',
  textAlign: 'center',
  lineHeight: '90px'
}

const cgTitle = {
  color: 'white',
  fontSize: '150px',
  textAlign: 'right',
  lineHeight: '130px'
}

const mjfFlex = {
  justifyContent: 'center',
  contentAlign: 'center'
}



export class Music extends Component {
  render() {
    return <div>
      <Navbar activeLink={"MUSIC"} />
      <div className="page">
        <div className="appear">
          <div className="grid">
            <div className="indulgent">
              <div style={title}>INDULGENT</div>
            </div>
            <div className="indulgent-guitar1" />
            <div className="indulgent-guitar2" />
            <div className="indulgent-cover">
              <div className="indulgent-cover-overlay cover-flex">
                <Button variant="outline-dark"><a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=wxw93aEFTfGDUXMgTjEzsg" target="_blank">SPOTIFY</a></Button>
                <Button variant="outline-dark"><a href="https://music.apple.com/us/album/no-drive-will-take-me-home/1429049796" target="_blank">APPLE MUSIC</a></Button>
                <Button variant="outline-dark"><a href="https://play.google.com/store/music/album/Indulgent_No_Drive_Will_Take_Me_Home?id=Bcwfm3gxejnt5fvkv2hlhxgxdei" target="_blank">GOOGLE PLAY</a></Button>
              </div>
            </div>

            <div className="mjf">
              <div style={mjfTitle}>MERRY JANE & THE FONDAS</div>
            </div>
            <div className="mjf-studio"></div>
            <div className="mjf-cover">
              <div className="mjf-cover-overlay cover-flex">
                <Button variant="secondary"><a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw" target="_blank">SPOTIFY</a></Button>
                <Button variant="secondary"><a href="https://music.apple.com/us/album/pulls-you-under-ep/1454982478" target="_blank">APPLE MUSIC</a></Button>
                <Button variant="secondary"><a href="https://play.google.com/store/music/album/Merry_Jane_the_Fondas_Pulls_You_Under?id=Bbp7z4p3isxbxsqv4oymqx7ndt4" target="_blank">GOOGLE PLAY</a></Button>
              </div>
            </div>

            <div className="cg">
              <div style={cgTitle}>CREAM GENIE</div>
            </div>
            <div className="cg-guitar"></div>
            <div className="cg-cover">
            <div className="cg-cover-overlay cover-flex">
                <Button variant="secondary"><a href="https://soundcloud.com/sunburstbox/sets/cream-genie-demos" target="_blank">SOUNDCLOUD</a></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Music;