import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as listingActions from "../../store/listing";
import './ListingCreateForm.css';


function ListingCreateForm() {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);

    const userId = sessionUser.id;
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0.00);
    const [errors, setErrors] = useState([]);


    // if (sessionUser) return (
    //     <Redirect to="/" />
    // );

    const handleSubmit = (e) => {
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

        // let setErrors = [];

        return dispatch(listingActions.createListing(listing))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });

        // reset();

        // return setErrors(['Confirm Password field must match the Password field']);
    };

    // const reset = () => {
    //     setAddress("");
    //     setCity("");
    //     setState("");
    //     setCountry("");
    //     setLat(null);
    //     setLong(null);
    //     setName("");
    //     setDescription("");
    //     setPrice(0.00);
    // }

    return (
        <div className='create-listing-container'>
            <form onSubmit={handleSubmit} className='create-listing-form'>
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
                        onChange={(e) => setAddress(e.target.value)}
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
                        onChange={(e) => setCity(e.target.value)}
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
                        onChange={(e) => setState(e.target.value)}
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
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                </label>
                <label className='listing-labels'>
                    LATITUDE
                    <input
                        className='listing-inputs'
                        type="decimal"
                        placeholder="00.000000"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                    />
                </label>
                <label className='listing-labels'>
                    LONGITUDE
                    <input
                        className='listing-inputs'
                        type="decimal"
                        placeholder="00.000000"
                        value={long}
                        onChange={(e) => setLong(e.target.value)}
                    />
                </label>
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
                    <input
                        className='listing-inputs'
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
                        placeholder="$0.00"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" id='create-listing-button'>CREATE LISTING</button>
            </form>
        </div>
    );

    // return (
    //     <div>
    //         Hi, I'm the listing create form!
    //     </div>
    // );
}

export default ListingCreateForm;
