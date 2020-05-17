import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import MediaQuery from 'react-responsive'
import Navbar from '../layout/Navbar'

import './pages.css';

import drums from '../../dist/images/music/indulgent/drums.jpg';
import guitar1 from '../../dist/images/music/indulgent/guitar1.jpg';
import guitar2 from '../../dist/images/music/indulgent/guitar2.jpg';
import indulgentCover from '../../dist/images/music/indulgent/cover.jpg';

import mjf from '../../dist/images/music/mjf/mjf.jpg';
import mjfStudio from '../../dist/images/music/mjf/studio.jpg';
import mjfCover from '../../dist/images/music/mjf/cover.jpg';

import cg from '../../dist/images/music/cg/cg.jpg';
import cgCover from '../../dist/images/music/cg/cover.jpg';
import cg1 from '../../dist/images/music/cg/1.jpg';

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
          {/* desktop  */}
          < MediaQuery minDeviceWidth={500} >
            <div className="grid">
              <div className="music-banner indulgent back-img">
                <div className="indulgent-title">INDULGENT</div>
                <div className="music-text">
                  I RELEASE MY SOLO MUSIC UNDER THE MONIKER, INDULGENT. I PERFORM ALL THE INSTRUMENTS (GUITAR, DRUMS, BASS) AND VOCALS ON THE RECORDINGS. I RECORDED MY FIRST ALBUM, <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl?si=Hl4dag6_QhSyX3f4Zv0mhg">TOXIC</a>, BY MYSELF IN MY BEDROOM AND RELEASED IT AT THE AGE OF 16. MY FOLLOW UP, <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=K98wvkQmQd6uMvHFrQt2ng">NO DRIVE WILL TAKE ME HOME</a>, WAS RECORDED IN A STUDIO AND RELEASED IN 2018. I'M CURRENTLY WRITING MY THIRD ALBUM WITH A HOPEFUL RELEASE IN 2020.
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
                <div className="mjf-title">MERRY JANE & THE FONDAS</div>
                <div className="mjf-text">
                  I DRUMMED IN THE BAND, MERRY JANE & THE FONDAS, FROM 2018 THROUGH 2019. WHILE PART OF THE GROUP, WE RECORDED A <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">STUDIO EP</a> WITH RENOWNED GUITARIST AND SONGWRITER,<a href="https://en.wikipedia.org/wiki/Jackie_Venson"> JACKIE VENSON</a>, AND ALSO PLAYED AN <a href="https://schedule.sxsw.com/2019/artists/2008465">OFFICIAL SXSW SHOWCASE</a>.
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
                <div className="cg-title">CREAM GENIE</div>
                <div className="music-text">
                  I DRUMMED IN THE JAM ROCK DUO, CREAM GENIE, FROM 2016 THROUGH 2017. DURING THAT TIME WE RELEASED A <a href="https://soundcloud.com/sunburstbox/sets/cream-genie-demos">DEMO</a> AND PLAYED MULTIPLE SHOWS ACROSS THE DFW METROPLEX.
              </div>
              </div>
              <div className="cg-guitar back-img"></div>
              <div className="cg-cover back-img">
                <div className="cg-cover-overlay cover-flex">
                  <Button variant="secondary"><a href="https://soundcloud.com/sunburstbox/sets/cream-genie-demos" target="_blank">SOUNDCLOUD</a></Button>
                </div>
              </div>
            </div>
          </ MediaQuery>


          {/* mobile  */}
          < MediaQuery maxDeviceWidth={500} >
            <img src={drums} style={mobileImg} />
            <div style={mobileTitle}>INDULGENT</div>
            <div style={mobileText}> I RELEASE MY SOLO MUSIC UNDER THE MONIKER, INDULGENT. I PERFORM ALL THE INSTRUMENTS (GUITAR, DRUMS, BASS) AND VOCALS ON THE RECORDINGS. I RECORDED MY FIRST ALBUM, <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl?si=Hl4dag6_QhSyX3f4Zv0mhg">TOXIC</a>, BY MYSELF IN MY BEDROOM AND RELEASED IT AT THE AGE OF 16. MY FOLLOW UP, <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=K98wvkQmQd6uMvHFrQt2ng">NO DRIVE WILL TAKE ME HOME</a>, WAS RECORDED IN A STUDIO AND RELEASED IN 2018. I'M CURRENTLY WRITING MY THIRD ALBUM WITH A HOPEFUL RELEASE IN 2020.
            </div>
            <img src={indulgentCover} style={mobileImg} />
            <img src={guitar1} style={mobileImg} />
            <img src={guitar2} style={mobileImg} />

            <img src={mjf} style={mobileImg} />
            <div style={mobileTitle}>MERRY JANE & THE FONDAS</div>
            <div style={mobileText}>I DRUMMED IN THE BAND, MERRY JANE & THE FONDAS, FROM 2018 THROUGH 2019. WHILE PART OF THE GROUP, WE RECORDED A <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">STUDIO EP</a> WITH RENOWNED GUITARIST AND SONGWRITER,<a href="https://en.wikipedia.org/wiki/Jackie_Venson"> JACKIE VENSON</a>, AND ALSO PLAYED AN <a href="https://schedule.sxsw.com/2019/artists/2008465">OFFICIAL SXSW SHOWCASE</a>.
            </div>
            <img src={mjfStudio} style={mobileImg} />
            <img src={mjfCover} style={mobileImg} />

            <img src={cg} style={mobileImg} />
            <div style={mobileTitle}>CREAM GENIE</div>
            <div style={mobileText}>
              I DRUMMED IN THE JAM ROCK DUO, CREAM GENIE, FROM 2016 THROUGH 2017. DURING THAT TIME WE RELEASED A <a href="https://soundcloud.com/sunburstbox/sets/cream-genie-demos">DEMO</a> AND PLAYED MULTIPLE SHOWS ACROSS THE DFW METROPLEX.
            </div>
            <img src={cgCover} style={mobileImg} />
            <img src={cg1} style={mobileImg} />
          </ MediaQuery>
        </div>
      </div>
    </div>;
  }
}

export default Music;

const mobileTitle = {
  color: 'white',
  fontSize: '50px',
  lineHeight: '50px'
}

const mobileImg = {
  width: '100vw'
}

const mobileText = {
  color: 'white',
  fontSize: '10px'
}

