import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoginDemo.css';


function LoginDemo() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleDemo = (e) => {
        e.preventDefault();

        const credential = 'demo';
        const password = 'password';

        return dispatch(sessionActions.login({ credential, password }))
    };



    return (
        <div className='login-demo-container'>
            <button type="submit" id='login-demo-button' onClick={handleDemo}>DEMO USER</button>
        </div>
    );
}

export default LoginDemo;
