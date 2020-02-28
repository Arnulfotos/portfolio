import React from "react";
import { Switch, Route } from 'react-router-dom';
import Splash from './pages/Splash.js';
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
      {/* <Route exact path='/about' exact component={AboutPage} /> */}
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
 