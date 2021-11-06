import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

function Map(props) {
    const {latitude, longitude, zoom } = props;
    const center = {lat:latitude, lng:longitude};
    const containerStyle = {width: '100%',height: '400px'};
    console.log(props,"map");
    return (
    <LoadScript googleMapsApiKey="AIzaSyDoTLld8oN8wZm0avj07nwEv0FXqdfiaOE" loadingElement={<p>Cargando</p>}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom} >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
            <Marker position={{lat:latitude, lng:longitude}} />
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)