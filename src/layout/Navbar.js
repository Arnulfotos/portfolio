import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import logo from "../../dist/images/logo.gif";
import './layout.css'

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  onClick = (event) => {
    this.setState({
      collapsed: !this.state.collapsed
    },
      console.log(this.state.collapsed));
  }

  render() {
    const activeStyle = {
      backgroundColor: 'red',
      color: 'white',
      width: '140px'
    }

    const activeMobileStyle = {
      backgroundColor: 'red',
      color: 'white',
      width: '170px'
    }

    const activeTextStyle = {
      color: 'white',
    }
    const black = {
      color: 'black'
    }

    return (
      <div>
        <div className="navbar">
          <div className="logo-container">

            {/* desktop  */}
            < MediaQuery minDeviceWidth={500} >
              <a href="/"><div className="nav-title" style={this.props.activeLink === "PHOTO" ? black : {}}>ABHI VELAGA</div></a>
            </MediaQuery>

            {/* mobile  */}
            < MediaQuery maxDeviceWidth={500} >
              <div className="nav-header">
                <a href="/"><div className="nav-title" style={this.props.activeLink === "PHOTO" ? black : {}}>ABHI VELAGA</div></a>

                {this.state.collapsed && <div className="menu-button" onClick={this.onClick}>+ MENU</div>}

                {!this.state.collapsed && <div className="menu-button" onClick={this.onClick}>- MENU</div>}

              </div>
            </MediaQuery>
          </div>

          <div className="subtitle">austin, tx.</div>

          {!this.state.collapsed &&
            <div>
              <a href="/about">
                <div className="link">
                  <div className="link-color" style={this.props.activeLink === "ABOUT" ? activeStyle : {}}></div>
                  <div className="link-text" style={this.props.activeLink === "ABOUT" ? activeTextStyle : {}}>
                    <div>ABOUT</div>
                  </div>
                </div>
              </a>

              <a href="/photo">
                <div className="link">
                  <div className="link-color" style={this.props.activeLink === "PHOTO" ? activeStyle : {}}></div>
                  <div className="link-text" style={this.props.activeLink === "PHOTO" ? activeTextStyle : {}}>
                    <div>PHOTO</div>
                  </div>
                </div>
              </a>

              <a href="/music">
                <div className="link">
                  <div className="link-color" style={this.props.activeLink === "MUSIC" ? activeStyle : {}}></div>
                  <div className="link-text" style={this.props.activeLink === "MUSIC" ? activeTextStyle : {}}>
                    <div>MUSIC</div>
                  </div>
                </div>
              </a>

              <a href="/software">
                <div className="link">
                  < MediaQuery minDeviceWidth={500} >
                    <div className="link-color" style={this.props.activeLink === "SOFTWARE" ? activeStyle : {}}></div>
                  </ MediaQuery>
                  < MediaQuery maxDeviceWidth={500} >
                    <div className="link-color" style={this.props.activeLink === "SOFTWARE" ? activeMobileStyle : {}}></div>
                  </ MediaQuery>
                  <div className="link-text" style={this.props.activeLink === "SOFTWARE" ? activeTextStyle : {}}>
                    <div>SOFTWARE</div>
                  </div>
                </div>
              </a>

              <div className="external-link"></div>

              <a href="https://open.spotify.com/artist/7JCVu8JTFAFrHqnYnGVPhi?si=wAs1clwUTiqOqS8e8RUJqg" target="_blank">
                <div className="external-link">SPOTIFY</div>
              </a>
              <a href="https://www.instagram.com/abhi.velaga/" target="_blank">
                <div className="external-link">INSTAGRAM</div>
              </a>

              <a href="https://www.instagram.com/abhi.film/" target="_blank">
                <div className="external-link">FILM INSTAGRAM</div>
              </a>
            </div>
          }

        </div>
      </div >
    )
  }
}

export default Navbar

