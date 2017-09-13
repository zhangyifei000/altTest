import React, { Component } from 'react';
import AltContainer from 'alt-container';
import logo from './logo.svg';
import './App.css';
import LocationContainer from '../src/components/LocationContainer.jsx'
import LocationStore from '../src/stores/LocationStore.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
        <AltContainer store={LocationStore}>
          <LocationContainer />
        </AltContainer>
      </div>
    );
  }
}

export default App;
