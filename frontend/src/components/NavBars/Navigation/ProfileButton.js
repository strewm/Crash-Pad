import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/');
    };


    return (
        <>
            <button onClick={openMenu} id='profile-button'>
                <i className="fas fa-user-circle"></i>
            </button>
            <div className="dropdown-container">
                {showMenu && (
                    <ul className="profile-dropdown">
                        <li>Welcome, {user.username}!</li>
                        <li>{user.email}</li>
                        <li>
                            <button onClick={logout}>LOG OUT</button>
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default ProfileButton;
