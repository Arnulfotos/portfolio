import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import MediaQuery from 'react-responsive'
import Navbar from '../layout/Navbar'

import { LazyLoadComponent } from 'react-lazy-load-image-component';
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
  render() {
    return <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"MUSIC"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"MUSIC"} mobile={true} /></MediaQuery>
      <div className="page">
        <div className="appear">

          <div className="software-intro">
            im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught im very self taught
          </div>

          {/* indulgent  */}
          <div className="indulgent back-img">
            <div className="indulgent-title">INDULGENT</div>
          </div>

          <div className="indulgent-grid" >
            <img src={guitar1} className="indulgent-grid-img" />
            <img src={guitar2} className="indulgent-grid-img" />
            <div className="flex"><div className="music-text">
              I RELEASE MY SOLO MUSIC UNDER THE MONIKER, INDULGENT. I PERFORM ALL THE INSTRUMENTS (GUITAR, DRUMS, BASS) AND VOCALS ON THE RECORDINGS. I RECORDED MY FIRST ALBUM, <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl?si=Hl4dag6_QhSyX3f4Zv0mhg">TOXIC</a>, BY MYSELF IN MY BEDROOM AND RELEASED IT AT THE AGE OF 16. MY FOLLOW UP, <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=K98wvkQmQd6uMvHFrQt2ng">NO DRIVE WILL TAKE ME HOME</a>, WAS RECORDED IN A STUDIO AND RELEASED IN 2018. I'M CURRENTLY WRITING MY THIRD ALBUM WITH A HOPEFUL RELEASE IN 2020.
            </div>
            </div>
          </div>

          <div className="flex cover-container">
            <div className="indulgent-cover-info" >
              i made this here are some links i made this here are some links i made this here are some links i made this here are some links i made this here are some links
          </div>
            <img src={indulgentCover} className="music-cover" />
          </div>

          {/* mjf  */}
          <div className="mjf back-img" />
          <div className="mjf-title">MERRY JANE & THE FONDAS</div>

          <div className="flex mjf-info">
            <div className="mjf-description">
              i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban
            </div>
            <img src={mjfStudio} className="mjf-studio" />
          </div>

          <div className="flex cover-container">
            <img src={mjfCover} className="music-cover" />
            <div className="mjf-cover-info" >
              i made this here are some links i made this here are some links i made this here are some links i made this here are some links i made this here are some links
            </div>
          </div>

          {/* cg  */}
          <div className="cg back-img" />
          <div className="mjf-title">CREAM GENIE</div>

          <div className="flex mjf-info">
            <img src={jason} className="mjf-studio" />
            <div className="cg-description">
              i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban i drummd in this ban
            </div>
          </div>

          <div className="flex cover-container">
            <div className="indulgent-cover-info" >
              i made this here are some links i made this here are some links i made this here are some links i made this here are some links i made this here are some links
            </div>
            <img src={cgCover} className="music-cover" />
          </div>
          
        </div>
      </div>
    </div>;
  }
}

export default Music;
