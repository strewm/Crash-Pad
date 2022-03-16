import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Maps.css';

// const containerStyle = {
//   width: '400px',
//   height: '400px',
// };

const center = {
  lat: 36.089501,
  lng: -115.474074,
};

const Maps = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          // mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        />
      )}
    </>
  );
};

export default React.memo(Maps);
