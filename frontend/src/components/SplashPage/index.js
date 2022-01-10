import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import * as sessionActions from '../../store/session';
import './Splash.css';


function SplashPage() {
    // const dispatch = useDispatch();

    // const sessionUser = useSelector(state => state.session.user);

    // const [credential, setCredential] = useState('');
    // const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState([]);

    // if (sessionUser) return (
    //     <Redirect to="/" />
    // );

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     setErrors([]);
    //     return dispatch(sessionActions.login({ credential, password }))
    //         .catch(async (res) => {
    //             const data = await res.json();
    //             if (data && data.errors) setErrors(data.errors);
    //         });
    // };

    return (
        <div className='splash-container'>
            {/* <form onSubmit={handleSubmit} className='login-form'>
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
                <button type="submit" id='login-button'>LOG IN</button>
            </form> */}
            <div className='main-header'>
                <div id='main-header-title'>Find your basecamp.</div>
                <div id='main-header-text'>Discover spots to stay by your favorite crags. Alpine starts supported by climbers, for climbers.</div>
            </div>
            <div className='main-container'>
                <div>container 1</div>
                <img src='/images/splash/splash-main-3.jpg' alt='splash main image'/>
            </div>
            <div className='sub-container-one'>
                <div>container 2</div>
            </div>
            <div className='sub-container-two'>
                <div>container 3</div>
            </div>
            <div className='sub-container-three'>
                <div>container 4</div>
            </div>
        </div>
    );
};

export default SplashPage;
