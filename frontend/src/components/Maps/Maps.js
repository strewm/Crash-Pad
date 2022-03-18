import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import './Maps.css';

const containerStyle = {
  // width: '100%',
  // minWidth: 'none!important',
  // maxWidth: 'none!important',
  // minHeight: 'none!important',
  // maxHeight: 'none!important',
  height: '100%',
};

const center = {
  lat: 39.8355,
  lng: -99.0909,
};

const Maps = ({ apiKey }) => {
  const [selected, setSelected] = useState({});

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const listings = useSelector(state => state.listings);
  const listingsArr = Object.values(listings);

  const onSelect = (item) => {
    setSelected(item);
  }

  console.log('-------', selected)

  return (
    <div className='maps-container'>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}>
          {listingsArr.map(listing => {
              return (
                <Marker key={listing.id} position={{ lat: +listing.lat, lng: +listing.lng}} onClick={() => onSelect(listing)}></Marker>
              )
          })}
          {selected.lat && selected.lng &&
            <InfoWindow position={{ lat: +selected.lat, lng: +selected.lng}} clickable={true} onCloseClick={() => setSelected({})}>
              <NavLink exact to={`/listings/${selected.id}`}>{selected.name}</NavLink>
            </InfoWindow>}
        </GoogleMap>
      )}
    </div>
  );
};

export default React.memo(Maps);
