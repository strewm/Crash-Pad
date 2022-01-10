import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import LoginFormPage from './components/LoginFormPage';
// import SignupFormPage from './components/SignupFormPage';
import Navigation from "./components/Navigation";
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';

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
            <SplashPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
        </Switch>
      )}
      <Footer />
    </>
  );
};

export default App;
