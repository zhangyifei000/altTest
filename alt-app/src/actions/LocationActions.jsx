import alt from '../alt'

class LocationActions {

    updateLocations(locations) {
        this.dispatch(locations)
    }

    fetchLocations() {
        this.dispatch()
    }

    fetchLocationSuccess(responseJason) {
        this.dispatch(responseJason)
    }

    fetchLocationFailed() {
        this.dispatch()
    }
}

export default alt.createActions(LocationActions);