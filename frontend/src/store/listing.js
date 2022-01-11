import { csrfFetch } from './csrf';


// ------------------- Action types ------------------- //
const LOAD_LISTING = 'listings/LOAD';
const ADD_LISTING = 'listings/ADD';
const UPDATE_LISTING = 'listings/UPDATE';
const REMOVE_LISTING = 'listings/REMOVE';


// ------------------- Action creators ------------------- //
const load = (listings) => {
    return {
        type: LOAD_LISTING,
        listings
    };
};

const add = (listing) => {
    return {
        type: ADD_LISTING,
        payload: listing
    };
};

const update = (listing) => {
    return {
        type: UPDATE_LISTING,
        payload: listing
    };
};

const remove = (listing) => {
    return {
        type: REMOVE_LISTING,
        payload: listing
    };
};


// ------------------- Thunk creators ------------------- //
// Get all listings
export const getListings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/listings`);

    if (response.ok) {
        const listings = await response.json();
        dispatch(load(listings));
    }
};

// Get all user listings
export const getUserListings = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/user/${userId}/listings`);

    if (response.ok) {
        const userListings = await response.json();
        dispatch(load(userListings));
    }
};

// Create listing
export const createListing = (listing) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(listing)
    });

    if (response.ok) {
        const newListing = await response.json();
        dispatch(add(newListing));
        return newListing;
    }
};

// Update listing
export const updateListing = (listing) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${listing.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(listing)
    });

    if (response.ok) {
        const updatedListing = await response.json();
        dispatch(update(updatedListing));
        return updatedListing;
    }
};

// Delete listing
export const deleteListing = (listing) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${listing}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const deletedListing = await response.json();
        dispatch(remove(deletedListing));
    }
};


// ------------------- Initial state ------------------- //
const initialState = { list: [] };


// ------------------- Reducer ------------------- //
// ***** If NOT working, doubel check variable of list []

const listingRentalsReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case LOAD_LISTING: {
            const allListings = {};
            action.list.forEach((listing) => {
                allListings[listing.id] = listing;
            });
            return { ...allListings, ...state.list, list: action.list }
        };
        case ADD_LISTING: {
            if (!state[action.listing.id]) {
                const newState = {
                    ...state,
                    [action.listing.id]: action.listing
                };
                const listingList = newState.list.map((id) => newState[id]);
                listingList.push(action.listing);
                return newState;
            };
            return {
                ...state,
                [action.listing.id]: {
                    ...state[action.listing.id],
                    ...action.listing
                }
            };
        };
        case UPDATE_LISTING: {
            return {
                ...state,
                [action.listing.id]: action.listing
            };
        };
        case REMOVE_LISTING: {
            const newState = { ...state };
            delete newState[action.listing];
            return newState;
        };
        default:
            return state;
    }
};

export default listingRentalsReducer;
