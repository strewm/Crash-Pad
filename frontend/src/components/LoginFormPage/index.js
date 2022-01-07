import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoginForm.css';


function LoginFormPage() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label id='login-labels'>
                    USERNAME OR EMAIL
                    <input
                        id='login-inputs'
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label id='login-labels'>
                    PASSWORD
                    <input
                        id='login-inputs'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" id='login-button'>LOG IN</button>
            </form>
        </div>
    );
};

export default LoginFormPage;
