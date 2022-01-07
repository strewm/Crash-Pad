const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);


// ------------------- API Test Routes (can remove this code) ------------------- //
// Router is created and API test route added to the router --> Accepting requests with
//  the URL path /api/test with the HTTP verb POST --> It sends a JSON response
//  containing whatever is in body of the request
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

// // Test the setTokenCookie function by getting a demo user + calling setTokenCookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'demo-one'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// // Test restoreUser by checking whether the req.user key has been populated by the middleware
// const { restoreUser } = require('../../utils/auth.js');

// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // Test requireAuth --> If no session user, route will return an error. Otherwise, will
// //  return the session user's info
// const { requireAuth } = require('../../utils/auth.js');

// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );








module.exports = router;
