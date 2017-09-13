import React, {Component} from 'react';

import LocationActions from '../actions/LocationActions';
// import LocationStore from '../stores/LocationStore'

class LocationContainer extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        LocationActions.fetchLocations()
    }

    componentWillReceiveProps(nextProps) {
        // eslint-disable-next-line
        console.log(nextProps)
    }

    render() {
        return (
        <div>
             <LocationList locationList={this.props.locations}/>
        </div>
        );
    }
}

const LocationList = (props) => {

    return (<ul>
            {
                props.locationList.map((location) => {
                    return (<li key={location.id}>{location.name}</li>);
                })
            }
            </ul>)
}

export default LocationContainer;