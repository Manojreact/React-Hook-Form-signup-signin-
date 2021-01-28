import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from '../components/LandingPage/LandingPage';
import Header from '../components/Header/header';
import CenterMode from '../components/silder/silder';
import grid from '../components/silder/grid';
import SignApp from '../components/silder/sign';
import signup from '../components/silder/signup';
import FormApp from '../components/silder/reactForm';



function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Header" component={Header} />
          <Route exact path="/silder" component={CenterMode} />
          <Route exact path="/grid" component={grid} />
          <Route exact path="/sign" component={SignApp} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/ReactHookForm" component={FormApp} />

          

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
