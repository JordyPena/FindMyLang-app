import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

export class Geo extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      currentPos: {
        lat: null,
        lng: null,
      },
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
    } else {
    }
    navigator.geolocation.getCurrentPosition((position) => {});

    if (process.env.NODE_ENV === "development") {
      this.setState({
        currentPos: {
          lat: 32.779278,
          lng: -96.794945,
        },
      });
      return;
    }
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        currentPos: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

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

  render() {
    let directions = this.state.selectedPlace.storeInfo;
    if (directions) {
      let {
        street_num,
        street,
        suite,
        city,
        state,
        zip,
      } = this.state.selectedPlace.storeInfo;
      directions = `${street_num}, ${street}, ${suite}, ${city}, ${state}, ${zip}`;
      directions = escape(directions);
    }

    return (
      <Map
        google={this.props.google}
        containerStyle={{
          width: "100%",
          height: "500px",
          position: "relative",
        }}
        className={"map"}
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
        {this.props.stores.map((store, idx) => {
          return (
            <Marker
              key={idx}
              id={idx}
              onClick={this.onMarkerClick}
              name={"Result"}
              position={{
                lat: store.latitude,
                lng: store.longitude,
              }}
              storeInfo={store}
            />
          );
        })}

        {this.state.currentPos && (
          <Marker
            user={"Current position"}
            onClick={this.onMarkerClick}
            icon={{
              url: "https://img.icons8.com/nolan/64/marker.png",
            }}
            position={{
              lat: this.state.currentPos.lat,
              lng: this.state.currentPos.lng,
            }}
          />
        )}

        {this.state.selectedPlace.storeInfo && (
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
              <a
                className="directions"
                href={`https://www.google.com/maps/dir/?api=1&destination=${directions}`}
              >
                Directions
              </a>
            </div>
          </InfoWindow>
        )}

        {this.state.selectedPlace.user && (
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <h1>{this.state.selectedPlace.user}</h1>
          </InfoWindow>
        )}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCmB3vExaUzRt_ebaVyW4FeGF7aN9_zOSM",
})(Geo);
