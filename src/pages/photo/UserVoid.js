import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
// import './pages.css';
import Columned from "react-columned";

export class UserVoid extends Component {
  render() {
    return (
      <div>
        <Navbar activeLink={"PHOTO"} />
        <div className="page">
          user void
        </div>
        
      </div>
    )
  }
}

export default UserVoid
