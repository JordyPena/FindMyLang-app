import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";


export class Geo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 32.779167,
        lng: -96.808891,
      },
      latitude: this.props.stores.map((store) => {
        return store.latitude;
      }),
      longitude: this.props.stores.map((store) => {
        return store.longitude;
      }),
    };
  }
  //how can i display the store address ?
  onMarkerClick = (props, marker, e) => {
    console.log("this is marker props", props)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        this.setState({ address });
        this.setState({
          mapCenter: latLng,
        });
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
   
    console.log(this.props.stores);
    console.log("this is lat", this.state.latitude);
    console.log("this is lat 2nd", this.state.latitude);
    console.log("this is long", this.state.longitude);
    console.log("marker props", this.state.selectedPlace)
    console.log("this is storeInfo", this.state.selectedPlace.storeInfo)
   
   
    return (
      <div className="google-map">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <Map
          google={this.props.google}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={14}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        >
          <Marker
            id={1}
            onClick={this.onMarkerClick}
            name={"1st result"}
            position={{
              lat: this.state.latitude[0],
              lng: this.state.longitude[0],
            }}
            storeInfo={this.props.stores[0]}
          />
          <Marker
            id={2}
            onClick={this.onMarkerClick}
            name={"2nd result"}
            position={{
              lat: this.state.latitude[1],
              lng: this.state.longitude[1],
            }}
            storeInfo={this.props.stores[1]}
          />
         
         { this.state.selectedPlace.storeInfo  &&
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
          <p>{this.state.selectedPlace.storeInfo.street_num}</p>
         <p>{this.state.selectedPlace.storeInfo.street}</p>
         <p>{this.state.selectedPlace.storeInfo.suite}</p>
         <p>{this.state.selectedPlace.storeInfo.city}</p>
         <p>{this.state.selectedPlace.storeInfo.state}</p>
         <p>{this.state.selectedPlace.storeInfo.zip}</p>
         
              
            </div>
          </InfoWindow>}

  
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCmB3vExaUzRt_ebaVyW4FeGF7aN9_zOSM",
})(Geo);
