import React from 'react';
import { useSelector } from 'react-redux';
import SplashPage from '../SplashPage';
import HomePage from '../HomePage';
import './SplashOrHome.css';

function SplashOrHome({ isLoaded }) {

    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <HomePage />
        );
    } else {
        sessionLinks = (
            <>
                <SplashPage />
            </>
        );
    }

    return (
        <>
            {isLoaded && sessionLinks}
            {/* {sessionLinks} */}
        </>
    );
};

export default SplashOrHome;
