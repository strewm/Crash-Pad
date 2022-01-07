import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';


function SignupFormPage() {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }

        return setErrors(['Confirm Password field must match the Password field']);
    };

    return (
        <div className='signup-container'>
            <form onSubmit={handleSubmit} className='signup-form'>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label id='signup-labels'>
                    EMAIL
                    <input
                        id='signup-inputs'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label id='signup-labels'>
                    USERNAME
                    <input
                        id='signup-inputs'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label id='signup-labels'>
                    PASSWORD
                    <input
                        id='signup-inputs'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label id='signup-labels'>
                    CONFIRM
                    <input
                        id='signup-inputs'
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" id='signup-button'>SIGN UP</button>
            </form>
        </div>
    );
}

export default SignupFormPage;
