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
        <AltContainer store={LocationStore} /*transform={(locationStore) => {
            const {locations}=locationStore;
            locations.push({id: 100, name: "上海"}); //修改loationstore数据

          //return {locations} //里面不会再有errorMessage 再LocationContainer 
            return {locationStore} //里面调用要使用this.props.locationStore才能取到里面的数据
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
