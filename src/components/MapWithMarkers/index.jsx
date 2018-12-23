import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";

const key = 'AIzaSyCrkhsmuop7H1PKHohuwHn0eat3iiQiwDY'

const MapWithMarkers = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 51.5074, lng: 0.078 }}
  >
    <Marker position={{ lat: props.lat, lng: props.lng }} />
    <Marker
        position={{ lat: 51.4700223, lng: -0.4542955 }}
        icon={{
            url: require('./airport.svg'),
            size: new window.google.maps.Size(140, 140),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(0, 32),
            scaledSize: new window.google.maps.Size(40, 40)
        }}
    >
    </Marker>
  </GoogleMap>
))

export default MapWithMarkers