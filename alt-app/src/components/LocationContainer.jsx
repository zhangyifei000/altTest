import React, {Component} from 'react';

import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';

class LocationContainer extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        LocationActions.fetchLocations()
    }

    render() {
        return (
        <div>
            Hello World
            {LocationStore.locations}
        </div>
        );
    }
}

export default LocationContainer;