const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();


// ------------------- User login API route ------------------- //
router.post('/', asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password }); // login method from /models/user.js

    if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
    };

    await setTokenCookie(res, user); // setTokenCookie from /utils/auth.js

    return res.json({
        user,
    });
}));


// ------------------- User logout API route ------------------- //
router.delete('/', (_req, res) => {
    res.clearCookie('token'); // Remove the token cookie from the response

    return res.json({ message: 'success' });
});


// ------------------- Restore session user API route ------------------- //
router.get('/', restoreUser, (req, res) => { // restoreUser from /utils/auth.js
    const { user } = req;
    
    if (user) {
        return res.json({
            user: user.toSafeObject() // toSafeObject from /models/user.js
        });
    } else return res.json({});
});






module.exports = router;
