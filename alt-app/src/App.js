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
        <AltContainer store={LocationStore} transform={(locationStore) => {
            const {locations}=locationStore;
            locations.push({id: 100, name: "上海"});

            return {locations}
          }} /*render={(locationStore) => {
            const {locations} = locationStore
            const name = locations[0].name
            //进行render
            return <i>{name}</i>
          }}*/>
          <LocationContainer />
        </AltContainer>
      </div>
    );
  }
}

export default App;
