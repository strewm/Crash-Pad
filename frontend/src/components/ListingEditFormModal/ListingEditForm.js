import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, useHistory, useParams } from "react-router-dom";

import { getOneListing } from "../../store/listing";
import { updateListing } from "../../store/listing";
import './ListingEditForm.css';


function ListingEditForm({ setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();
    const singleListing = useSelector(state => state.listing[id]);

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const [address, setAddress] = useState(singleListing?.address);
    const [city, setCity] = useState(singleListing?.city);
    const [state, setState] = useState(singleListing?.state);
    const [country, setCountry] = useState(singleListing?.country);
    const [lat, setLat] = useState(singleListing?.lat);
    const [long, setLong] = useState(singleListing?.long);
    const [name, setName] = useState(singleListing?.name);
    const [description, setDescription] = useState(singleListing?.description);
    const [price, setPrice] = useState(singleListing?.price);
    const [errors, setErrors] = useState([]);

    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateLat = (e) => setLat(e.target.value);
    const updateLong = (e) => setLong(e.target.value);
    const updateName = (e) => setName(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);

    useEffect(() => {
        let errors=[];
        if (!address) errors.push('Please provide an address.');
        if (!city) errors.push('Please provide a city.');
        if (!state) errors.push('Please provide a state.');
        if (!country) errors.push('Please provide a country.');
        if (!lat) errors.push('Please provide a latitude.');
        if (!long) errors.push('Please provide a longitude.');
        if (!name) errors.push('Please provide a name.');
        if (!description) errors.push('Please provide a description.');
        if (!price) errors.push('Please provide a price.');
        setErrors(errors);
    }, [address, city, state, country, lat, long, name, description, price]);


    const handleEdit = async (e) => {
        e.preventDefault();

        const listing = {
            userId,
            address,
            city,
            state,
            country,
            lat,
            long,
            name,
            description,
            price
        }

        const listingDispatch = await dispatch(updateListing(listing))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) return setErrors(data.errors);
        });

        if (listingDispatch) {
            // history.push(`/listings/${listing.id}`);
            setShowModal(false);
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    return (
        <div className='create-listing-container'>
            <form onSubmit={handleEdit} className='create-listing-form'>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label className='listing-labels'>
                    ADDRESS
                    <input
                        className='listing-inputs'
                        type="text"
                        placeholder="123 Mountain Road"
                        value={address}
                        onChange={updateAddress}
                        required
                    />
                </label>
                <label className='listing-labels'>
                    CITY
                    <input
                        className='listing-inputs'
                        type="text"
                        placeholder="Mountain City"
                        value={city}
                        onChange={updateCity}
                        required
                    />
                </label>
                <label className='listing-labels'>
                    STATE
                    <input
                        className='listing-inputs'
                        type="text"
                        placeholder="California"
                        value={state}
                        onChange={updateState}
                        required
                    />
                </label>
                <label className='listing-labels'>
                    COUNTRY
                    <input
                        className='listing-inputs'
                        type="text"
                        placeholder="USA"
                        value={country}
                        onChange={updateCountry}
                        required
                    />
                </label>
                <label className='listing-labels'>
                    LATITUDE
                    <input
                        className='listing-inputs'
                        type="decimal"
                        placeholder="0.000000"
                        value={lat}
                        onChange={updateLat}
                    />
                </label>
                <label className='listing-labels'>
                    LONGITUDE
                    <input
                        className='listing-inputs'
                        type="decimal"
                        placeholder="0.000000"
                        value={long}
                        onChange={updateLong}
                    />
                </label>
                <label className='listing-labels'>
                    LISTING NAME
                    <input
                        className='listing-inputs'
                        type="text"
                        placeholder="Enter a listing name here..."
                        value={name}
                        onChange={updateName}
                        required
                    />
                </label>
                <label className='listing-labels'>
                    DESCRIPTION
                    <input
                        className='listing-inputs'
                        type="text"
                        placeholder="Enter a listing description here..."
                        value={description}
                        onChange={updateDescription}
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
                        onChange={updatePrice}
                        required
                    />
                </label>
                <button type="submit" id='create-listing-button'>CREATE LISTING</button>
                <button type="button" id='cancel-edit-button' onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default ListingEditForm;
