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
                <div id='main-header-text'>Discover spots to stay by your favorite crags.<br></br>Alpine starts supported by climbers, for climbers.</div>
            </div>
            <div className='main-container'>
                <div>container 1</div>
                <img src='/images/splash/splash-main-3.jpg' alt='splash main image'/>
            </div>
            <div className='sub-container-one'>
                <div id='sub-tile-one'>
                    <img src='/images/splash/splash-sub-one-1.jpg' alt='splash sub image'/>
                    <div>Camping access made easier.</div>
                </div>
                <div id='sub-tile-two'>
                    <img src='/images/splash/splash-sub-one-2.jpg' alt='splash sub image'/>
                    <div>Climbing is our #1 priority.</div>
                </div>
            </div>
            <div className='sub-container-two'>
                <div id='sub-tile-three'>
                    <img src='/images/splash/splash-sub-two-3.jpg' alt='splash sub image'/>
                    <div>
                        <div id='sub-tile-3-text'>Own land? Help enable access to climbing by providing campsites.</div>
                        <div id='sub-tile-3-sub-text'>Host our community of adventure-loving climbers in locations near and dear to all of our hearts.</div>
                    </div>
                </div>
            </div>
            {/* <div className='sub-container-three'>
                <div>Find your next adventure</div>
                <div>
                    <div id='sub-tile-four'>
                        <img />
                        <div>Text</div>
                    </div>
                    <div id='sub-tile-five'>
                        <img />
                        <div>Text</div>
                    </div>
                    <div id='sub-tile-six'>
                        <img />
                        <div>Text</div>
                    </div>
                    <div id='sub-tile-seven'>
                        <img />
                        <div>Text</div>
                    </div>
                    <div id='sub-tile-eight'>
                        <img />
                        <div>Text</div>
                    </div>
                    <div id='sub-tile-nine'>
                        <img />
                        <div>Text</div>
                    </div>
                    <div id='sub-tile-ten'>
                        <img />
                        <div>Text</div>
                    </div>
                    <div id='sub-tile-eleven'>
                        <img />
                        <div>Text</div>
                    </div>
                    <div id='sub-tile-twelve'>
                        <img />
                        <div>Text</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default SplashPage;
