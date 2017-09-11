import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationContainer from '../src/components/LocationContainer.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationContainer />
      </div>
    );
  }
}

export default App;
