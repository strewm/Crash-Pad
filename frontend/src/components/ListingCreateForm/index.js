import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createListing } from "../../store/listing";
import './ListingCreateForm.css';


function ListingCreateForm() {
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


    // if (sessionUser) return (
    //     <Redirect to="/" />
    // );

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

        // const listingDispatch = await dispatch(createListing(listing));

        // await dispatch(createListing(listing));


        // setErrors = ([]);

        const listingDispatch = await dispatch(createListing(listing))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) return setErrors(data.errors);
            });

        // const listingDispatch = await dispatch(createListing(listing));

        // if (listingDispatch) {
        //     history.goBack();
        // }


        // reset();

        // return setErrors(['Confirm Password field must match the Password field']);
    };

    // const reset = () => {
    //     setAddress("");
    //     setCity("");
    //     setState("");
    //     setCountry("");
    //     setLat("0.000000");
    //     setLong("0.000000");
    //     setName("");
    //     setDescription("");
    //     setPrice("");
    //     setErrors([]);
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
                        placeholder="0.000000"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                    />
                </label>
                <label className='listing-labels'>
                    LONGITUDE
                    <input
                        className='listing-inputs'
                        type="decimal"
                        placeholder="0.000000"
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
                        placeholder="0.00"
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
