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
            <div className="music-banner indulgent back-img">
              <div style={title}>INDULGENT</div>
              <div className="music-text">
                ABHI RELEASES HIS SOLO MUSIC UNDER THE MONIKER, INDULGENT. HE PERFORMS ALL THE INSTRUMENTS (GUITAR, DRUMS, BASS) AND VOCALS ON THE RECORDINGS. HE RECORDED HIS FIRST ALBUM, <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl?si=Hl4dag6_QhSyX3f4Zv0mhg">TOXIC</a>, HIMSELF IN HIS BEDROOM AND RELEASED IT AT THE AGE OF 16. HIS FOLLOW UP, <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=K98wvkQmQd6uMvHFrQt2ng">NO DRIVE WILL TAKE ME HOME</a>, WAS RECORDED IN A STUDIO AND RELEASED IN 2018. HE'S CURRENTLY WRITING HIS THIRD ALBUM WITH A HOPEFUL RELEASE IN 2020.
              </div>
            </div>

            <div className="indulgent-guitar1 back-img" />
            <div className="indulgent-guitar2 back-img" />
            <div className="indulgent-cover back-img">
              <div className="indulgent-cover-overlay cover-flex">
                <Button variant="outline-dark"><a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=wxw93aEFTfGDUXMgTjEzsg" target="_blank">SPOTIFY</a></Button>
                <Button variant="outline-dark"><a href="https://music.apple.com/us/album/no-drive-will-take-me-home/1429049796" target="_blank">APPLE MUSIC</a></Button>
                <Button variant="outline-dark"><a href="https://play.google.com/store/music/album/Indulgent_No_Drive_Will_Take_Me_Home?id=Bcwfm3gxejnt5fvkv2hlhxgxdei" target="_blank">GOOGLE PLAY</a></Button>
              </div>
            </div>

            <div className="music-banner mjf back-img">
              <div style={mjfTitle}>MERRY JANE & THE FONDAS</div>
              <div className="mjf-text">
                ABHI DRUMMED IN THE BAND, MERRY JANE & THE FONDAS, FROM 2018 THROUGH 2019. WHILE PART OF THE GROUP, THEY RECORDED A <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">STUDIO EP</a> WITH RENOWNED GUITARIST AND SONGWRITER,<a href="https://en.wikipedia.org/wiki/Jackie_Venson">JACKIE VENSON</a>, AND ALSO PLAYED AN <a href="https://schedule.sxsw.com/2019/artists/2008465">OFFICIAL SXSW SHOWCASE</a>.
              </div>
            </div>
            <div className="mjf-studio back-img"></div>
            <div className="mjf-cover back-img">
              <div className="mjf-cover-overlay cover-flex">
                <Button variant="secondary"><a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw" target="_blank">SPOTIFY</a></Button>
                <Button variant="secondary"><a href="https://music.apple.com/us/album/pulls-you-under-ep/1454982478" target="_blank">APPLE MUSIC</a></Button>
                <Button variant="secondary"><a href="https://play.google.com/store/music/album/Merry_Jane_the_Fondas_Pulls_You_Under?id=Bbp7z4p3isxbxsqv4oymqx7ndt4" target="_blank">GOOGLE PLAY</a></Button>
              </div>
            </div>

            <div className="music-banner cg back-img">
              <div style={cgTitle}>CREAM GENIE</div>
              <div className="music-text">
                ABHI DRUMMED IN THE JAM ROCK DUO, CREAM GENIE, FROM 2016 THROUGH 2017. DURING THAT TIME THEY RELEASED A <a href="https://soundcloud.com/sunburstbox/sets/cream-genie-demos">DEMO</a> AND PLAYED MULTIPLE SHOWS ACROSS THE DFW METROPLEX.
              </div>
            </div>
            <div className="cg-guitar back-img"></div>
            <div className="cg-cover back-img">
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