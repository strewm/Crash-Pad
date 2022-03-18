import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import './Maps.css';

import { getListings } from '../../store/listing'

const containerStyle = {
  // width: '100%',
  minWidth: 'none!important',
  maxWidth: 'none!important',
  minHeight: 'none!important',
  maxHeight: 'none!important',
  height: '100%',
};

const center = {
  lat: 39.8355,
  lng: -99.0909,
};

const Maps = ({ apiKey }) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const listings = useSelector(state => state.listings);
  const listingsArr = Object.values(listings);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}>
          {listingsArr.map(listing => {
              return (
                <Marker key={listing.id} position={{ lat: +listing.lat, lng: +listing.lng}}></Marker>
              )
          })}
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
