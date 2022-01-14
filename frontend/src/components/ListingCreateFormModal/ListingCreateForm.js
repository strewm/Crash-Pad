import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { createListing } from "../../store/listing";
import './ListingCreateForm.css';


function ListingCreateForm({ setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState("0.000000");
    const [long, setLong] = useState("0.000000");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
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
                <div className="address-line-three">
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
                            value={long}
                            onChange={(e) => setLong(e.target.value)}
                        />
                    </label>
                </div>
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

export default ListingCreateForm;
