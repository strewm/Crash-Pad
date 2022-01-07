const express = require('express');
const router = express.Router(); // Created express router
const apiRouter = require('./api');


// All of the URLs of the routes in the api router will have the prefix /api
router.use('/api', apiRouter);

// Test route (can remove this code)
router.get('/hello/world', function(req, res) {
    // Setting a cookie on the response (name of 'XSRF-TOKEN') to the value of the req.csrfToken method's return
    res.cookie('XSRF-TOKEN', req.csrfToken());

    // Sending the string as the response's body
    res.send('Hello World!');
});







module.exports = router;
