import React from "react";
import { Switch, Route } from 'react-router-dom';
import Splash from './pages/Splash.js';
import About from './pages/About.js';
import Photo from './pages/Photo.js';
import Code from './pages/Code.js';
import Music from './pages/Music.js';
import './App.css';

const ErrorPage = () => {
  return (
    <div className="body">
      <div className="error-text" >
        <h1> 404: Page Not Found :(</h1>
      </div>
      {/* <img src={ErrorGif} className="error-gif" /> */}
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path='/' exact component={Splash} />
      <Route exact path='/about' exact component={About} />
      <Route exact path='/photo' exact component={Photo} />
      <Route exact path='/code' exact component={Code} />
      <Route exact path='/music' exact component={Music} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
 