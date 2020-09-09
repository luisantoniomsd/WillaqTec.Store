import React, { Component } from 'react'
import { Map, GoogleApiWrapper,Marker  } from 'google-maps-react';

export class GoogleMap extends Component {
    render() {
        const mapStyles = {
          width: "100%",
          height: "100%",
        };
        return (
          <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={{ lat: -18.000887, lng: -70.255949 }}
          >
            <Marker position={{ lat: -18.000887, lng: -70.255949 }} />
          </Map>
        );
      }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBkBW2nwo1ip4jiRft2epTODShV7pFolB8",
  })(GoogleMap);