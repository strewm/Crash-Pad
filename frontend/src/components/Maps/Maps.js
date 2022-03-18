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

const Maps = ({ apiKey, geocodeKey }) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  // Geocode.setApiKey(geocodeKey);
  // Geocode.setLanguage("en");
  // Geocode.setRegion("es");
  // Geocode.setLocationType("ROOFTOP");

  const listings = useSelector(state => state.listings);
  const listingsArr = Object.values(listings);

  console.log('--------', listingsArr)
  // console.log('--------', typeof(+(listingsArr[0].lat)))

  // // console.log('-----------', listing)

  // const coordArr = [];
  // listingsArr.map((listing, i) => {
  //   // const coordArr = [];
  //   Geocode.fromAddress(`${listing.address} ${listing.city}`).then(
  //     (response) => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       // console.log(lat, lng);
  //       // console.log(i)
  //       let obj = {
  //         name: `${i}`,
  //         location: {
  //           lat: parseFloat(`${lat}`),
  //           lng: parseFloat(`${lng}`)
  //         }
  //       }

  //       // console.log('+++', typeof(obj.location.lat))
  //       coordArr.push(obj);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // })

  // console.log('-----', coordArr)


  return (
    <>
      {/* <div>{listingsArr.length}</div> */}
      {/* <div>{typeof(+listingsArr[0].lat)}</div> */}
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}>
          {/* <Marker position={{'lat':36.089501, 'lng':-115.474074}}/> */}
          {/* <Marker position={coordArr[0]?.location}/> */}
          {listingsArr.map(listing => {
              // return (
                // <Marker key={item.name} position={item.location}></Marker>
              // )
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
