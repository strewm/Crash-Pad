import { csrfFetch } from './csrf';


// ------------------- Action types ------------------- //
const LOAD_LISTING = 'listings/LOAD';
const LOAD_ONE_LISTING = 'listings/LOAD_ONE';
const ADD_LISTING = 'listings/ADD';
const UPDATE_LISTING = 'listings/UPDATE';
const REMOVE_LISTING = 'listings/REMOVE';
const ADD_IMAGE = 'listings/ADD_IMAGE';


// ------------------- Action creators ------------------- //
const load = (list) => {
    return {
        type: LOAD_LISTING,
        list
    };
};

const loadOne = (list) => {
    return {
        type: LOAD_ONE_LISTING,
        list
    };
};

const add = (listing) => {
    return {
        type: ADD_LISTING,
        listing
    };
};

const update = (listing) => {
    return {
        type: UPDATE_LISTING,
        listing
    };
};

const remove = (listing) => {
    return {
        type: REMOVE_LISTING,
        listing
    };
};

const addImage = (image) => {
    return {
        type: ADD_IMAGE,
        image
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

// Get one listing
export const getOneListing = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${id}`);

    if (response.ok) {
        const singleList = await response.json();
        dispatch(loadOne(singleList));
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
    // console.log(listing)

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
export const deleteListing = (listingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${listingId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const deletedListing = await response.json();
        console.log(deletedListing)
        dispatch(remove(deletedListing));
    }
};

// Get images on listing
export const createImage = (imageObj) => async (dispatch) => {
    const { image, listingId } = imageObj;
    // const { images, listingId } = imageObj;
    const formData = new FormData();
    formData.append("listingId", listingId);

    // Multiple files
    // if (images && images.length !== 0) {
    //   for (var i = 0; i < images.length; i++) {
    //     formData.append("images", images[i]);
    //   }
    // }

    // Single file
    if (image) formData.append("image", image);
    // console.log('hi', listingId, image, formData)

    const response = await csrfFetch(`/api/listings/${listingId}/images`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    console.log('======inside store after fetch')
    const data = await response.json();

    console.log('====inside store after data', data)
    dispatch(addImage(data.image));
  };


// ------------------- Initial state ------------------- //
const initialState = {};


// ------------------- Reducer ------------------- //
const listingRentalsReducer = (state = initialState, action) => {
    let newState = {};

    switch (action.type) {
        case LOAD_LISTING: {
            action.list.forEach((listing) => {
                newState[listing.id] = listing;
            });
            return newState;
        };
        case LOAD_ONE_LISTING: {
            const newState = {
                ...state,
                [action.list.id]: action.list
            };
            return newState;
        };
        case ADD_LISTING: {
            const newState = {...state};
            newState[action.listing.id] = action.listing;
            return newState;
        };
        case UPDATE_LISTING: {
            return {
                ...state,
                [action.listing.id]: action.listing
            };
        };
        case REMOVE_LISTING: {
            const newState = { ...state };
            delete newState[action.listing.id];
            return newState;
        };
        case ADD_IMAGE: {
            return { ...state, image: action.image };
        }
        default:
            return state;
    }
};

export default listingRentalsReducer;
