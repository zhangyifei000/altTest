import LocationAction from '../actions/LocationActions'

var mockData = [
  { id: 0, name: 'Abu Dhabi' },
  { id: 1, name: 'Berlin' },
  { id: 2, name: 'Bogota' },
  { id: 3, name: 'Buenos Aires' },
  { id: 4, name: 'Cairo' },
  { id: 5, name: 'Chicago' },
  { id: 6, name: 'Lima' },
  { id: 7, name: 'London' },
  { id: 8, name: 'Miami' },
  { id: 9, name: 'Moscow' },
  { id: 10, name: 'Mumbai' },
  { id: 11, name: 'Paris' },
  { id: 12, name: 'San Francisco' }
];

const LocationSource = {
    fetchLocation() {
        return {
            remote(state) {     // remotely fetch something (required)
                return new Promise((resolve, reject) => {
                    setTimeout(function() {
                        resolve(mockData)
                    }, 1000);
                });
            },
            // local(state) {     
                // this function checks in our local cache first
                // if the value is present it'll use that instead (optional).
    
            // },
            // here we setup some actions to handle our response
            // loading: LocationAction.loadingAction
            success: LocationAction.fetchLocationSuccess,
            error: LocationAction.fetchLocationFailed
            // should fetch has precedence over the value returned by local in determining whether remote should be called
            // in this particular example if the value is present locally it would return but still fire off the remote request (optional)
            // shouldFetch(state) {
            //  return true
            // }
        }
    }
}

export default LocationSource;