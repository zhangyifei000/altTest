import alt from '../alt'

class LocationActions {

    updateLocations(locations) {
        return {locations}
    }

    fetchLocations(data) {
        return data
    }

    fetchLocationSuccess(responseJson) {
        return responseJson
    }

    fetchLocationFailed() {
        return {}
    }
}

export default alt.createActions(LocationActions);