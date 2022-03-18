import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SignupFormModal from '../../Auth/SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <SignupFormModal />
            </>
        );
    }

    let logoMargin;
    if (sessionUser) {
        logoMargin = '89.45px';
    } else {
        logoMargin = '233.12px';
    };


    return (
        <div className='navlink-container'>
            <div></div>
            <a href="/" className='logo'>
                <img src="/images/logo-1.png" id='logo-image' alt='logo' style={{marginLeft:logoMargin}}/>
            </a>
            {/* <div id='search-bar'>(Search bar goes here)</div> */}
            <div id='navlink-home'>
                <NavLink exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
};

export default Navigation;
