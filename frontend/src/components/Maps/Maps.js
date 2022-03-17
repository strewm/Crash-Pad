import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './Maps.css';

const containerStyle = {
  // width: '100%',
  height: '100%',
};

const center = {
  lat: 36.089501,
  lng: -115.474074,
};

const Maps = ({ apiKey }) => {

  const listings = useSelector(state => state.listings);
  const listingsArr = Object.values(listings);

  console.log('--------', listingsArr)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        />
      )}
    </>
  );
};

export default React.memo(Maps);
