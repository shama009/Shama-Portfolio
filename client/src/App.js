import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavHeader from "./components/NavHeader";
import Resume from "./components/Resume";
class App extends Component {
  render() {
    return (
      <div className="App">

          <NavHeader />
          <Router>
            <Route exact path = "/resume" component = {Resume} />
            </Router>
      </div>
    );
  }
}

export default App;
