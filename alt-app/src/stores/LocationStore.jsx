import alt from '../alt';
import LocationActions from '../actions/LocationActions';
import  LocationSource from '../sources/LocationSource';

class LocationStore {
    constructor() {

        this.locations = [];
        this.errorMessage = '';

        this.bindListeners = {
            handleUpdateLocations: LocationActions.updateLocations,
            handleFetchLocations: LocationActions.fetchLocations,
            handleFetchLocationSuccess: LocationActions.fetchLocationSuccess,
            handleFetchLocationFailed: LocationActions.fetchLocationFailed
        }

        this.exportAsync(LocationSource)
    }

    handleUpdateLocations(locations) {
        this.locations = locations
    }

    handleFetchLocations() {
        this.getInstance().fetchLocation()
    }

    // 异步调用时成功和失败都要在store里处理不然使用alt isLocaing会有bug

    handleFetchLocationSuccess(responseJason) {
        this.locations = responseJason
    }

    handleFetchLocationFailed() {
        this.errorMessage = "获取失败"
    }
}

export default alt.createStore(LocationStore, "LocationStore");