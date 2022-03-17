import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import './Maps.css';

const containerStyle = {
  // width: '100%',
  height: '100%',
};

const center = {
  lat: 36.089501,
  lng: -115.474074,
};

const Maps = ({ apiKey, geocodeKey }) => {
  Geocode.setApiKey(geocodeKey);
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");

  const listings = useSelector(state => state.listings);
  const listingsArr = Object.values(listings);

  // console.log('--------', listingsArr)
  // console.log('-----------', listing)

  listingsArr.map(listing => {
    Geocode.fromAddress(`${listing.address} ${listing.city}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  })



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
          zoom={12}>
{/*
        {
          listingsArr.map(listing => {
            Geocode.fromAddress(`${listing.address} ${listing.city}`).then(
              (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
              },
              (error) => {
                console.error(error);
              }
            );
          })
        } */}

        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
