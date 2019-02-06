import React, { Component } from 'react'
import { InfoWindow, Marker, GoogleApiWrapper, google, marker, map} from 'google-maps-react';

export class Map extends Component {
  render() {
    console.log("Here is my co-ordinate 1",this.props.latitude)
    console.log("Here is my co-ordinate 2",this.props.longitude)
    return (
      <div>
        { 
        this.props.latitude !== ' ' && this.props.longitude !== ' ' ? 
          <Map google={this.props.google} zoom={14} 
          initialCenter={{
            lat: this.props.latitude,
            lng: this.props.longitude
          }}>

            <Marker onClick={this.onMarkerClick}
                    position={{
                      lat: this.props.latitude,
                      lng: this.props.longitude
                    }}
                    />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                </div>
            </InfoWindow>
          </Map>
        :
        null
      }
      </div>
      );
    
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA1jA7nd60TgCZS4B7pKquBJYY5m9NfDKo')
})(Map)