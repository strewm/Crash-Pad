const express = require('express');
const router = express.Router(); // Created express router


// Test route
router.get('/hello/world', function(req, res) {
    // Setting a cookie on the response (name of 'XSRF-TOKEN') to the value of the req.csrfToken method's return
    res.cookie('XSRF-TOKEN', req.csrfToken());

    // Sending the string as the response's body
    res.send('Hello World!');
});







module.exports = router;
