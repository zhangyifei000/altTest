import alt from '../alt'

class LocationActions {

    updateLocations(locations) {
        return {locations}
    }

    fetchLocations() {
        return {}
    }

    fetchLocationSuccess(responseJson) {
        return responseJson
    }

    fetchLocationFailed() {
        return {}
    }
}

export default alt.createActions(LocationActions);