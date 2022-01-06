const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const { environment } = require('./config'); // Checking environment key in config file
const isProduction = environment === 'production';

const app = express();

app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.json()); // Middleware for parsing JSON bodies of reqs with Content-Type 'application/json'



// Security Middleware (pre-request)
if (!isProduction) {
    // Enable cors only in development! (React frontend served from different server than that of Express)
    app.use(cors());
};

// Helmet helps set a variety of headers to better secure app
app.use(helmet({
    contentSecurityPolicy: false
}));

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

app.use(routes); // Connects all the routes

module.exports = app;
