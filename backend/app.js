const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { ValidationError } = require('sequelize');

const { environment } = require('./config'); // Checking environment key in config file
const isProduction = environment === 'production';

const app = express();

app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.json()); // Middleware for parsing JSON bodies of reqs with Content-Type 'application/json'



// ------------------- Security Middleware (pre-request) ------------------- //
if (!isProduction) {
    // Enable cors only in development! (React frontend served from different server than that of Express)
    app.use(cors());
};

// Helmet helps set a variety of headers to better secure app
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Set the _csrf token and create req.csrfToken method to use cookies
app.use(
    csurf({
        cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true,
        },
    })
);


// ------------------- Route connections (connects all routes) ------------------- //
app.use(routes);


// ------------------- Error-handler middleware ------------------- //
// Resource not found error-handler
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = 'Resource not found.';
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

// Sequelize error-handler
app.use((err, _req, _res, next) => {
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';
    };

    next(err);
});

// Error formatter error-handler
app.use((err, _req, res, next) => {
    res.status(err.status || 500);
    console.error(err);

    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});



module.exports = app;
