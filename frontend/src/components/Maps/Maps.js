import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import './Maps.css';

import { getListings } from '../../store/listing'

const containerStyle = {
  // width: '100%',
  height: '100%',
};

const center = {
  lat: 36.089501,
  lng: -115.474074,
};

const Maps = ({ apiKey, geocodeKey }) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  Geocode.setApiKey(geocodeKey);
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");

  const listings = useSelector(state => state.listings);
  const listingsArr = Object.values(listings);

  // console.log('--------', listingsArr)
  // console.log('-----------', listing)


  const coordArr = [];
  listingsArr.map((listing, i) => {
    Geocode.fromAddress(`${listing.address} ${listing.city}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        // console.log(lat, lng);
        // console.log(i)
        let obj = {
          name: `${i}`,
          location: {
            lat: parseFloat(`${lat}`),
            lng: parseFloat(`${lng}`)
          }
        }
        coordArr.push(obj);
      },
      (error) => {
        console.error(error);
      }
    )
    ;
  })

  console.log('-----', coordArr)


  return (
    <>
      {isLoaded && (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}>
            {/* <Marker position={{'lat':36.089501, 'lng':-115.474074}}/> */}
         {
            coordArr.map(item => {
              return (
                <Marker key={item.name} position={item.location}/>
              )
            })
         }

        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
