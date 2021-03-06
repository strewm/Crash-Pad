import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import sessionReducer from './session';
import listingRentalsReducer from "./listing";
import imagesReducer from "./image";
import mapsReducer from "./maps";

const rootReducer = combineReducers({
  session: sessionReducer,
  listings: listingRentalsReducer,
  images: imagesReducer,
  maps: mapsReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
