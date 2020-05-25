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
// import 'bootstrap/dist/css/bootstrap.min.css';
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
      <Route exact path='/' exact component={Home} />
      <Route exact path='/about' exact component={About} />
      <Route exact path='/photo' exact component={Photo} />
      <Route exact path='/portfolio' exact component={Portfolio} />
      <Route exact path='/miamivice' exact component={Miami} />
      <Route exact path='/uservoid' exact component={UserVoid} />
      <Route exact path='/published' exact component={Published} />
      <Route exact path='/software' exact component={Software} />
      <Route exact path='/music' exact component={Music} />
      <Route exact path='/hi' exact component={Hi} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
 