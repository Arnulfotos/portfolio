import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import MediaQuery from 'react-responsive'
import './pages.css';

export class Blog extends Component {
  render() {
    return (
      <div className="blog-menu">
        <MediaQuery minDeviceWidth={500}><Navbar activeLink={"BLOG"} mobile={false} /></MediaQuery>
        <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"BLOG"} mobile={true} /></MediaQuery>
        <div 
          id="retainable-rss-embed"
          data-rss="https://medium.com/feed/@abhinav.velaga"
          data-maxcols="3"
          data-layout="grid"
          data-poststyle="inline"
          data-readmore="Read the rest"
          data-buttonclass="btn btn-primary"
          data-offset="-100" 
          />
      </div>
    )
  }
}

export default Blog
