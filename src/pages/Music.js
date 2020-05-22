import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import MediaQuery from 'react-responsive'
import Navbar from '../layout/Navbar'
import YouTube from 'react-youtube';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

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
import jason from '../../dist/images/music/cg/6.jpg';

export class Music extends Component {

  getHeight(image) {
    var img = new Image();
    img.onload = function () {
      return this.height;
    }
    img.src = image;
  }

  render() {
    return <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"MUSIC"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"MUSIC"} mobile={true} /></MediaQuery>
      <div className="page">
        <div className="appear">

          <div className="software-intro">
            Music was my very first passion. I started learning guitar when I was 9 and started teaching myself bass when I was 13, audio production and drums at 14, and vocals at 15. I wrote, performed, recorded, produced, and released my first album independently, all at the age of 16. I spent the end of high school recording my second album in a studio and released that at the age of 18.
          </div>

          {/* indulgent  */}
          <div className="indulgent back-img">
            <div className="indulgent-title">INDULGENT</div>
          </div>

          <div className="indulgent-grid" >
            <LazyLoadImage effect="opacity" src={guitar1} className="indulgent-grid-img" width="100%" />
            <LazyLoadImage effect="opacity" src={guitar2} className="indulgent-grid-img" width="100%" />
            <div className="flex indulgent-grid-text">
              <div className="music-text">
                I RELEASE MY SOLO MUSIC UNDER THE MONIKER, INDULGENT. I PERFORM ALL THE INSTRUMENTS (GUITAR, DRUMS, BASS) AND VOCALS ON THE RECORDINGS. I RECORDED MY FIRST ALBUM, <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl?si=Hl4dag6_QhSyX3f4Zv0mhg">TOXIC</a>, BY MYSELF IN MY BEDROOM AND RELEASED IT AT THE AGE OF 16. MY FOLLOW UP, <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=K98wvkQmQd6uMvHFrQt2ng">NO DRIVE WILL TAKE ME HOME</a>, WAS RECORDED IN A STUDIO AND RELEASED IN 2018. I'M CURRENTLY WRITING MY THIRD ALBUM WITH A HOPEFUL RELEASE IN 2020.
            </div>
            </div>
          </div>

          {/* desktop  */}
          <MediaQuery minDeviceWidth={500}>
            <div className="flex cover-container">
              <div className="indulgent-cover-info flex" >
                <div className="cover-title" >No Drive Will Take Me Home</div>
                <div className="cover-artist" >Indulgent</div>
                <div className="indulgent-buttons cover-buttons flex">
                  <Button variant="outline-dark"><a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=wxw93aEFTfGDUXMgTjEzsg" target="_blank">SPOTIFY</a></Button>
                  <Button variant="outline-dark"><a href="https://music.apple.com/us/album/no-drive-will-take-me-home/1429049796" target="_blank">APPLE MUSIC</a></Button>
                  <Button variant="outline-dark"><a href="https://play.google.com/store/music/album/Indulgent_No_Drive_Will_Take_Me_Home?id=Bcwfm3gxejnt5fvkv2hlhxgxdei" target="_blank">GOOGLE PLAY</a></Button></div>
                <div>Guitar/Drums/Vocals/Bass performed by Abhi Velaga</div>
                <div>Released 2018</div>
              </div>
              <LazyLoadImage effect="opacity" src={indulgentCover} className="music-cover" height={this.getHeight(indulgentCover)} />
            </div>
          </MediaQuery>

          {/* mobile  */}
          <MediaQuery maxDeviceWidth={500}>
            <div className="flex music-mobile">
              <LazyLoadImage effect="opacity" src={indulgentCover} className="music-cover" height={this.getHeight(indulgentCover)} />

              <div className="cover-title" >No Drive Will Take Me Home</div>
              <div className="cover-artist" >Indulgent</div>
              <div className="cover-buttons flex">
                <Button variant="outline-dark"><a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=wxw93aEFTfGDUXMgTjEzsg" target="_blank">SPOTIFY</a></Button>
                <Button variant="outline-dark"><a href="https://music.apple.com/us/album/no-drive-will-take-me-home/1429049796" target="_blank">APPLE MUSIC</a></Button>
                <Button variant="outline-dark"><a href="https://play.google.com/store/music/album/Indulgent_No_Drive_Will_Take_Me_Home?id=Bcwfm3gxejnt5fvkv2hlhxgxdei" target="_blank">GOOGLE PLAY</a>
                </Button>
              </div>
              <div className="cover-extra">
                <div>Guitar/Drums/Vocals/Bass performed by Abhi Velaga</div>
                <div>Released 2018</div>
              </div>

            </div>
          </MediaQuery>

          {/* mjf  */}
          <div className="mjf back-img" />
          <div className="mjf-title">MERRY JANE & THE FONDAS</div>

          <div className="flex mjf-info">
            <div className="mjf-description">
              I DRUMMED IN THE BAND, MERRY JANE & THE FONDAS, FROM 2018 THROUGH 2019. WHILE PART OF THE GROUP, WE RECORDED A <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">STUDIO EP</a> WITH RENOWNED GUITARIST AND SONGWRITER,<a href="https://en.wikipedia.org/wiki/Jackie_Venson"> JACKIE VENSON</a>, AND ALSO PLAYED AN <a href="https://schedule.sxsw.com/2019/artists/2008465">OFFICIAL SXSW SHOWCASE</a>.
            </div>
            <LazyLoadImage effect="opacity" src={mjfStudio} className="mjf-studio" />
          </div>

          <div className="flex cover-container">
            <LazyLoadImage effect="opacity" src={mjfCover} className="music-cover" />
            <div className="mjf-cover-info" >
              <div className="cover-title" >Pulls You Under</div>
              <div className="cover-artist" >Merry Jane & The Fondas</div>
              <div className="mjf-buttons cover-buttons flex">
                <Button variant="outline-dark"><a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw" target="_blank">SPOTIFY</a></Button>
                <Button variant="outline-dark"><a href="https://music.apple.com/us/album/pulls-you-under-ep/1454982478" target="_blank">APPLE MUSIC</a></Button>
                <Button variant="outline-dark"><a href="https://play.google.com/store/music/album/Merry_Jane_the_Fondas_Pulls_You_Under?id=Bbp7z4p3isxbxsqv4oymqx7ndt4" target="_blank">GOOGLE PLAY</a></Button>
              </div>
              <div>Guitar/Vocals - Allyb</div>
              <div>Lead Guitar/Backing Vocals - Serenity Autumn</div>
              <div>Bass - Johnny Young</div>
              <div>Drums - Abhi Velaga</div>
              <div>Produced by Jackie Venson</div>
              <div>Released 2019</div>
            </div>
          </div>

          <YouTube videoId="XXMGt_N6Mc0" className="youtube" />

          {/* cg  */}
          <div className="cg back-img" />
          <div className="mjf-title">CREAM GENIE</div>

          <div className="flex mjf-info">
            <LazyLoadImage effect="opacity" src={jason} className="mjf-studio" />
            <div className="cg-description">
              I DRUMMED IN THE JAM ROCK DUO, CREAM GENIE, FROM 2016 THROUGH 2017. DURING THAT TIME WE RELEASED A <a href="https://soundcloud.com/sunburstbox/sets/cream-genie-demos">DEMO</a> AND PLAYED MULTIPLE SHOWS ACROSS THE DFW METROPLEX.
            </div>
          </div>

          <div className="flex cover-container">
            <div className="indulgent-cover-info" >
              <div className="cover-title" >Cream Genie 2016 Demos</div>
              <div className="cover-artist" >Cream Genie</div>
              <div className="cover-buttons"><Button variant="outline-dark"><a href="https://soundcloud.com/sunburstbox/sets/cream-genie-demos" target="_blank">SOUNDCLOUD</a></Button></div>
              <div>Guitar - Jason Swan</div>
              <div>Drums - Abhi Velaga</div>
            </div>
            <LazyLoadImage effect="opacity" src={cgCover} className="music-cover" />
          </div>
          <YouTube videoId="19hlSPVXDjo" className="youtube" />
        </div>
      </div>
    </div>;
  }
}

export default Music;
