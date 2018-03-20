import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavHeader from "./components/NavHeader";
import Resume from "./components/Resume";
class App extends Component {
  render() {
    return (
      <div className="App">

          <NavHeader />
          <Resume />
      </div>
    );
  }
}

export default App;
