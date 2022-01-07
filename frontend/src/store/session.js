// Contains all actions specific to the session user's information,
//  and the session user's Redux reducer

import { csrfFetch } from './csrf';


// ------------------- Action types ------------------- //
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';


// ------------------- Action creators ------------------- //
const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};


// ------------------- Thunk creators ------------------- //
// Login user
export const login = (user) => async (dispatch) => {
    const { credential, password } = user;

    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });

    const data = await response.json();

    // Dispatch action for setting the session user to the user in the res body
    dispatch(setUser(data.user));
    return response;
};

// Maintains user session across page refresh
export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

// Signup user
export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

// Logout user
export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};


// ------------------- Initial state ------------------- //
const initialState = { user: null };


// ------------------- Reducer ------------------- //
const sessionReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
