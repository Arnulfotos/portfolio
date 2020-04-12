import React, { Component } from 'react'
import logo from "../../dist/images/logo.gif";
import './layout.css'

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">

        <a href="/">
          <div className="logo-container">
            <img src={logo} className="logo"></img>
            <div className="subtitle"><h6><i>austin, tx.</i></h6></div>
          </div>
        </a>

        <div className="flex link-container">
          <a href="/photo">
            <div className="link">
              <div className="link-color"></div>
              <div className="link-block">
                <div className="link-piece"></div>
                <div className="link-piece"></div>
                <div className="link-piece"></div>
                <div className="link-piece"><h4>PHOTO</h4></div>
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
                <div className="link-piece"><h4>MUSIC</h4></div>
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
                <div className="link-piece"><h4>CODE</h4></div>
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
                <div className="link-piece"><h4>ABOUT</h4></div>
              </div>
            </div>
          </a>
        </div>

      </div>
    )
  }
}

export default Navbar