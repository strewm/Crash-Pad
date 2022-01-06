const router = require('express').Router();


// API test route
// Router is created and API test route added to the router --> Accepting
//  requests with the URL path /api/test with the HTTP verb POST --> It
//  sends a JSON response containing whatever is in body of the request
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});



module.exports = router;
