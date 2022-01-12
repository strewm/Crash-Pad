import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import LoginFormPage from './components/LoginFormPage';
import Navigation from "./components/Navigation";
import SplashOrHome from './components/SplashOrHome';
import Footer from './components/Footer';
import ListingSingle from './components/ListingSingle';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashOrHome isLoaded={isLoaded}/>
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          {/* <Route path="/listings">
            <ListingViewer />
          </Route> */}
          <Route path="/listings/:id">
            <ListingSingle />
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
