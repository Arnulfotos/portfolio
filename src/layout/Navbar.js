import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import logo from "../../dist/images/logo.gif";
import './layout.css'

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsedMenu: true
    };
  }

  render() {
    const activeStyle = {
      backgroundColor: 'red',
      color: 'white'
    }

    return (
      <div>
        {/* desktop */}
        <MediaQuery minDeviceWidth={500} >
          <div className="navbar">
            <div className="logo-container">
              <a href="/">
                <img src={logo} className="logo"></img>
              </a>
            </div>

            <div className="subtitle"><h6><i>austin, tx.</i></h6></div>

            <div className="link">
              <a href="/photo">
                <div className="link-color"></div>
                <div className="link-block" style={this.props.activeLink === "PHOTO" ? activeStyle : {}}>
                  <div>PHOTO</div>
                </div>
              </a>
            </div>
          </div>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500} >
          <div className="mobile-navbar flex">

            <div className="flex" >
              {this.state.collapsedMenu && <div className="mobile-link-menu" style={{ color: 'white' }} onClick={() => this.setState({ collapsedMenu: false })}>MENU +</div>}
              {!this.state.collapsedMenu &&
                <div>
                  <div className="mobile-link-menu" style={{ color: 'white' }} onClick={() => this.setState({ collapsedMenu: true })}>MENU -</div>
                  <a href="/photo"><div className="mobile-link appear-first">[ PHOTO ]</div></a>
                  <a href="/music"><div className="mobile-link appear-second">[ MUSIC ]</div></a>
                  <a href="/software"><div className="mobile-link appear-third">[ SOFTWARE ]</div></a>
                  <a href="/about"><div className="mobile-link appear-fourth">[ ABOUT ]</div></a>
                </div>
              }
            </div>

            <a href="/">
              <div className="mobile-logo-container flex">
                <img src={logo} className="mobile-logo"></img>
                <div className="mobile-subtitle"><i>austin, tx.</i></div>
              </div>
            </a>

          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Navbar

