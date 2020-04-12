import React, { Component } from 'react'
import './layout.css'

export class Navbar extends Component {
  render() {
    return (
      <div className="flex navbar">
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
    )
  }
}

export default Navbar