import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Photo from './pages/Photo.js';
import Miami from './pages/photo/Miami.js';
import Portfolio from './pages/photo/Portfolio.js';
import UserVoid from './pages/photo/UserVoid.js';
import Published from './pages/photo/Published.js';
import Software from './pages/Software.js';
import Music from './pages/Music.js';
import Hi from './pages/Hi.js';
import Navbar from './layout/Navbar'
import MediaQuery from 'react-responsive'
import './App.css';

const ErrorPage = () => {
  return (
    <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"ERROR"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"ERROR"} mobile={true} /></MediaQuery>
      <div className="error" >
        <div className="error-text">It looks like you're lost :(</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path='/~avelaga/' exact component={Home} />
      <Route exact path='/~avelaga/about' exact component={About} />
      <Route exact path='/~avelaga/photo' exact component={Photo} />
      <Route exact path='/~avelaga/portfolio' exact component={Portfolio} />
      <Route exact path='/~avelaga/miamivice' exact component={Miami} />
      <Route exact path='/~avelaga/uservoid' exact component={UserVoid} />
      <Route exact path='/~avelaga/published' exact component={Published} />
      <Route exact path='/~avelaga/software' exact component={Software} />
      <Route exact path='/~avelaga/music' exact component={Music} />
      <Route exact path='/~avelaga/hi' exact component={Hi} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
