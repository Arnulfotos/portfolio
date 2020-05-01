import React, { Component } from 'react'
import Navbar from '../layout/Navbar'

export class Home extends Component {
  render() {
    return (
      <div className="appear">
        <Navbar activeLink={"HOME"} />
        <div className="home" />
      </div>
    )
  }
}

export default Home
