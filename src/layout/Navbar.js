import React, { Component } from 'react'
import logo from "../../dist/images/logo.gif";
import './layout.css'

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
          <div className="logo-container">
            <a href="/"><img src={logo} className="logo"></img></a>
            <div className="subtitle"><h6><i>austin, tx.</i></h6></div>
          </div>
          
        <div className="flex link-container">
        <a href="/photo">
          <div className="link">
            <div className="link-color"></div>
            <div className="link-block">
              <div className="link-piece"></div>
              <div className="link-piece"></div>
              <div className="link-piece"></div>
              <div className="link-piece">PHOTO</div>
            </div>
          </div>
        </a>

        <a href="/music">
          <div className="link">
            <div className="link-color"></div>
            <div className="link-block">
              <div className="link-piece"></div>
              <div className="link-piece"></div>
              <div className="link-piece"></div>
              <div className="link-piece">MUSIC</div>
            </div>
          </div>
        </a>

        <a href="/code">
          <div className="link">
            <div className="link-color"></div>
            <div className="link-block">
              <div className="link-piece"></div>
              <div className="link-piece"></div>
              <div className="link-piece"></div>
              <div className="link-piece">CODE</div>
            </div>
          </div>
        </a>

        <a href="/about">
          <div className="link">
            <div className="link-color"></div>
            <div className="link-block">
              <div className="link-piece"></div>
              <div className="link-piece"></div>
              <div className="link-piece"></div>
              <div className="link-piece">ABOUT</div>
            </div>
          </div>
        </a>
        </div>

      </div>
    )
  }
}

export default Navbar