import { csrfFetch } from './csrf';


// ------------------- Action types ------------------- //
const ADD_IMAGE = 'images/ADD_IMAGE';
const LOAD_ALL_IMAGES = 'images/LOAD_ALL_IMAGES';
const LOAD_LISTING_IMAGES = 'images/LOAD_LISTING_IMAGES';
const REMOVE_IMAGE = 'images/REMOVE_IMAGE';


// ------------------- Action creators ------------------- //
const addImage = (image) => {
    return {
        type: ADD_IMAGE,
        image
    };
};

const loadAllImages = (images) => {
    return {
        type: LOAD_ALL_IMAGES,
        images
    };
};

const loadListingImages = (images) => {
    return {
        type: LOAD_LISTING_IMAGES,
        images
    };
};

const removeImage = (image) => {
    return {
        type: REMOVE_IMAGE,
        image
    };
};



// ------------------- Thunk creators ------------------- //
// Get ALL images
export const getAllImages = () => async (dispatch) => {
    const response = await csrfFetch(`/api/images/`);

    if (response.ok) {
        const data = await response.json();
        console.log('==========', data)
        dispatch(loadAllImages(data));
    }
};

// Get one listing's images
export const getListingImages = (listingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${listingId}/images`);

    if (response.ok) {
        const data = await response.json();
        dispatch(loadListingImages(data));
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

    const response = await csrfFetch(`/api/images/${listingId}/images/create`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    // console.log('======inside store after fetch')
    const data = await response.json();

    // console.log('====inside store after data', data)
    dispatch(addImage(data.image));
};



// ------------------- Initial state ------------------- //
const initialState = {};



// ------------------- Reducer ------------------- //
const imagesReducer = (state = initialState, action) => {
    let newState = {};

    switch (action.type) {
        case LOAD_ALL_IMAGES: {
            action.images.forEach((image) => {
                newState[image.id] = image;
            });
            return newState;
        }
        case LOAD_LISTING_IMAGES: {
            action.images.forEach((image) => {
                newState[image.id] = image;
            });
            return newState;
        };
        case ADD_IMAGE: {
            return { ...state, image: action.image };
        };
        default:
            return state;
    }
};

export default imagesReducer;
