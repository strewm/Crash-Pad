import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SignupFormModal from '../SignupFormModal';
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
                {/* <NavLink to="/signup">Sign Up</NavLink> */}
                <SignupFormModal />
            </>
        );
    }

    return (
        <ul className='navlink-container'>
            <li id='navlink-home'>
                <NavLink exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
};

export default Navigation;