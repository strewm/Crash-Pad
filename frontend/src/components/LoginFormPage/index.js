import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import LoginDemo from '../LoginDemo';
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
                <label className='login-labels'>
                    USERNAME OR EMAIL
                    <input
                        className='login-inputs'
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label className='login-labels'>
                    PASSWORD
                    <input
                        className='login-inputs'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" id='login-button'>LOG IN</button>
                <LoginDemo />
            </form>
            {/* <div className='sub-container-one'>
                <div>Safety + Conservation</div>
                <div>
                    <div id='sub-tile-four'>
                        <img />
                        <div>Safety is our #1 priority</div>
                    </div>
                    <div id='sub-tile-five'>
                        <img />
                        <div>Conservation is also our #1 priority</div>
                        <p>Did you know that climbing and the activities surrounding
                            it can hurt our beloved lands? While climbing has grown as a sport,
                            campsites have remained relatively the same. This has led to
                            unprecedented numbers of visitors who have no place to stay, and
                            often resort to illegal camping.
                        </p>
                    </div>
                    <div id='sub-tile-six'>
                        <img />
                        <div>Text</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default LoginFormPage;
