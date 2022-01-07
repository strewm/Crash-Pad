const express = require('express');
const router = express.Router(); // Created express router
const apiRouter = require('./api');


// All of the URLs of the routes in the api router will have the prefix /api
router.use('/api', apiRouter);


// Test route (can remove this code)
// router.get('/hello/world', function (req, res) {
//     // Setting a cookie on the response (name of 'XSRF-TOKEN') to the value of the req.csrfToken method's return
//     res.cookie('XSRF-TOKEN', req.csrfToken());

//     // Sending the string as the response's body
//     res.send('Hello World!');
// });


// ------------------- Static Routes ------------------- //
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    // Serve the frontend's index.html file at the root route
    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());

        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });

    // Serve the static assets in the frontend's build folder
    router.use(express.static(path.resolve("../frontend/build")));

    // Serve the frontend's index.html file at all other routes NOT starting with /api
    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());

        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
};

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.json({});
    });
};





module.exports = router;
