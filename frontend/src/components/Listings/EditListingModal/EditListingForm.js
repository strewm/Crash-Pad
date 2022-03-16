import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { updateListing } from "../../../store/listing";
import './EditListing.css';


function EditListingForm({ setShowModal }) {
    const dispatch = useDispatch();

    const { id } = useParams();
    const singleListing = useSelector(state => state.listings[id]);

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
            id: id,
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
            setShowModal(false);
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal(false);
    };


    return (
        <div className='edit-listing-container'>
            <form onSubmit={handleEdit} className='edit-listing-form'>
                <ul className="errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="address-line-one">
                    <label className='edit-listing-labels'>
                        ADDRESS
                        <input
                            className='edit-listing-inputs'
                            type="text"
                            placeholder="123 Mountain Road"
                            value={address}
                            onChange={updateAddress}
                            required
                        />
                    </label>
                    <label className='edit-listing-labels' id='edit-listing-label-city'>
                        CITY
                        <input
                            className='edit-listing-inputs'
                            type="text"
                            placeholder="Mountain City"
                            value={city}
                            onChange={updateCity}
                            required
                        />
                    </label>
                </div>
                <div className="address-line-two">
                    <label className='edit-listing-labels'>
                        STATE
                        <input
                            className='edit-listing-inputs'
                            type="text"
                            placeholder="California"
                            value={state}
                            onChange={updateState}
                            required
                        />
                    </label>
                    <label className='edit-listing-labels' id='edit-listing-label-country'>
                        COUNTRY
                        <input
                            className='edit-listing-inputs'
                            type="text"
                            placeholder="USA"
                            value={country}
                            onChange={updateCountry}
                            required
                        />
                    </label>
                </div>
                <div className="address-line-three">
                    <label className='edit-listing-labels'>
                        LATITUDE
                        <input
                            className='edit-listing-inputs'
                            type="decimal"
                            placeholder="0.000000"
                            value={lat}
                            onChange={updateLat}
                        />
                    </label>
                    <label className='edit-listing-labels' id='edit-listing-label-longitude'>
                        LONGITUDE
                        <input
                            className='edit-listing-inputs'
                            type="decimal"
                            placeholder="0.000000"
                            value={long}
                            onChange={updateLong}
                        />
                    </label>
                </div>
                <label className='edit-listing-labels'>
                    LISTING NAME
                    <input
                        className='edit-listing-inputs'
                        type="text"
                        placeholder="Enter a listing name here..."
                        value={name}
                        onChange={updateName}
                        required
                    />
                </label>
                <label className='edit-listing-labels'>
                    DESCRIPTION
                    <textarea rows="5"
                        className='edit-listing-inputs'
                        id='edit-listing-inputs-description'
                        type="text"
                        placeholder="Enter a listing description here..."
                        value={description}
                        onChange={updateDescription}
                        required
                    />
                </label>
                <label className='edit-listing-labels'>
                    PRICE
                    <input
                        className='edit-listing-inputs'
                        type="decimal"
                        placeholder="0.00"
                        value={price}
                        onChange={updatePrice}
                        required
                    />
                </label>
                <button type="submit" id='edit-listing-confirm-button'>EDIT LISTING</button>
                <button type="button" id='cancel-edit-button' onClick={handleCancel}>CANCEL</button>
            </form>
        </div>
    );
}

export default EditListingForm;
