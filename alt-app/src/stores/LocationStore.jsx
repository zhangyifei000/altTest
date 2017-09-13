import alt from '../alt';
import LocationActions from '../actions/LocationActions';
import  LocationSource from '../sources/LocationSource';

class LocationStore {
    constructor() {
        this.locations = []
        this.errorMessage = ''

        this.bindListeners ({
            handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
            handleFetchLocations: LocationActions.FETCH_LOCATIONS,
            handleFetchLocationSuccess: LocationActions.FETCH_LOCATION_SUCCESS,
            handleFetchLocationFailed: LocationActions.FETCH_LOCATION_FAILED
        });

        this.exportAsync(LocationSource)
    }

    handleUpdateLocations(locations) {
        this.locations = locations
    }

    handleFetchLocations(data) {
        const params = Object.assign({}, data, {name: "Bill"})

        this.getInstance().getLocations(params)
    }

    // 异步调用时成功和失败都要在store里处理不然使用alt isLocaing会有bug

    handleFetchLocationSuccess(locations) {

        this.locations = locations;
    }

    handleFetchLocationFailed() {
        this.errorMessage = "failed"
    }
}

export default alt.createStore(LocationStore, "LocationStore");