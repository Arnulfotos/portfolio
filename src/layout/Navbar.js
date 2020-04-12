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

        <div className="link animation">
          <div className="link-piece"></div>
          <div className="link-piece"></div>
          <div className="link-piece"></div>
          <div className="link-piece">MUSIC</div>
        </div>
        <div className="link animation">
          <div className="link-piece"></div>
          <div className="link-piece"></div>
          <div className="link-piece"></div>
          <div className="link-piece">CODE</div>
        </div>
        <div className="link animation">
          <div className="link-piece"></div>
          <div className="link-piece"></div>
          <div className="link-piece"></div>
          <div className="link-piece">ABOUT</div>
        </div>
      </div>
    )
  }
}

export default Navbar

// const navbar = {
//   width: '50vw',
//   height: '8vh',
//   backgroundColor: 'white',
//   float: 'right',
// }
