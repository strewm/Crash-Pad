import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Geocode from 'react-geocode';
import { createListing } from "../../../store/listing";
import './CreateListing.css';


function CreateListingForm({ setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const key = useSelector((state) => state.maps.key);
    const geocodeKey = key.googleMapsAPIKeyGeocode;
    // console.log('-----this is the key', geocodeKey)


    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState([]);

    const listings = useSelector(state => state.listings);
    const listingsArr = Object.values(listings);

    Geocode.setApiKey(geocodeKey);
    Geocode.setLanguage("en");
    Geocode.setRegion("es");
    Geocode.setLocationType("ROOFTOP");

    useEffect(() => {
        Geocode.fromAddress(`${address} ${city} ${state}`).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                // console.log('hey', lat,lng)
                // console.log(response.results[0])
                // setLat(lat);
                // setLong(lng);

                setLat(parseFloat(response.results[0].geometry.location.lat));
                setLng(parseFloat(response.results[0].geometry.location.lng));
                // console.log('---1', typeof(lat), typeof(lng))
            },
            (error) => {
                console.error(error);
            }
        );
    }, [address])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('---1', typeof(lat), typeof(lng))

        const listing = { userId, address, city, state, country, lat, lng, name, description, price };

        const listingDispatch = await dispatch(createListing(listing))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) return setErrors(data.errors);
            });

        if (listingDispatch) {
            history.push('/');
            setShowModal(false);
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal(false);
    };


    return (
        <div className='create-listing-container'>
            <form onSubmit={handleSubmit} className='create-listing-form'>
                <ul className="errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="address-line-one">
                    <label className='listing-labels'>
                        ADDRESS
                        <input
                            className='listing-inputs'
                            type="text"
                            placeholder="123 Mountain Road"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </label>
                    <label className='listing-labels' id='listing-label-city'>
                        CITY
                        <input
                            className='listing-inputs'
                            type="text"
                            placeholder="Mountain City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="address-line-two">
                    <label className='listing-labels'>
                        STATE
                        <input
                            className='listing-inputs'
                            type="text"
                            placeholder="California"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                    </label>
                    <label className='listing-labels' id='listing-label-country'>
                        COUNTRY
                        <input
                            className='listing-inputs'
                            type="text"
                            placeholder="USA"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </label>
                </div>
                {/* <div className="address-line-three">
                    <label className='listing-labels'>
                        LATITUDE
                        <input
                            className='listing-inputs'
                            type="decimal"
                            placeholder="0.000000"
                            value={lat}
                            onChange={(e) => setLat(e.target.value)}
                        />
                    </label>
                    <label className='listing-labels' id='listing-label-longitude'>
                        LONGITUDE
                        <input
                            className='listing-inputs'
                            type="decimal"
                            placeholder="0.000000"
                            value={lng}
                            onChange={(e) => setLng(e.target.value)}
                        />
                    </label>
                </div> */}
                <label className='listing-labels'>
                    LISTING NAME
                    <input
                        className='listing-inputs'
                        type="text"
                        placeholder="Enter a listing name here..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label className='listing-labels'>
                    DESCRIPTION
                    <textarea rows="5"
                        className='listing-inputs'
                        id='create-listing-inputs-description'
                        type="text"
                        placeholder="Enter a listing description here..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label className='listing-labels'>
                    PRICE
                    <input
                        className='listing-inputs'
                        type="decimal"
                        placeholder="0.00"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" id='create-listing-button' >CREATE LISTING</button>
                <button type="button" id='cancel-create-button' onClick={handleCancel}>CANCEL</button>
            </form>
        </div>
    );
}

export default CreateListingForm;
