import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import * as sessionActions from "./store/session";
import LoginFormPage from './components/Auth/LoginFormPage';
import Navigation from "./components/NavBars/Navigation";
import SplashOrHome from './components/SplashOrHome';
import Footer from './components/Footer';

import SingleListing from './components/Listings/SingleListing';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // let subNav;
  // if (sessionUser) {
  //   subNav = <SubNavigation />
  // } else {
  //   subNav = '';
  // }

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* {subNav} */}
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashOrHome isLoaded={isLoaded}/>
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/listings/:id">
            <SingleListing />
          </Route>
          {/* <Route path="/listings/:id/edit">
            <ListingEditForm />
          </Route> */}
        </Switch>
      )}
      <Footer />
    </>
  );
};

export default App;
