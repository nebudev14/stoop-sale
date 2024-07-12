import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
const containerStyle={
    width: '600px',
    height: '200px',
};
const center={
    lat:40.682,
    lng: -73.998
};

const GoogleMapComponent=()=>{
    return (
        <LoadScript googleMapsApiKey="process.env.MAPS_KEY">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}>
            <Marker position={center}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleMapComponent;