const router = require('express').Router();


// ------------------- API Test Routes ------------------- //
// Router is created and API test route added to the router --> Accepting
//  requests with the URL path /api/test with the HTTP verb POST --> It
//  sends a JSON response containing whatever is in body of the request
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

// Test the setTokenCookie function by getting a demo user + calling setTokenCookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            username: 'demo-one'
        },
    })
    setTokenCookie(res, user);
    return res.json({ user });
}));














module.exports = router;
