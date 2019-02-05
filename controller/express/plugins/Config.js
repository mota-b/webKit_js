/**
 * Module dependencies.
 */
let express = require('express');
    path = require('path');
    logger = require('morgan');
    cookieParser = require('cookie-parser');
    bodyParser = require('body-parser');
    session = require('express-session')
    cors = require('cors')

module.exports = function (app) {

    // Views and Public paths
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../../../view/views'));
    app.use("*/js", express.static(path.join(__dirname, "../../../view/public/javascripts")));
    app.use("*/css", express.static(path.join(__dirname, "../../../view/public/stylesheets")));
    app.use("*/img", express.static(path.join(__dirname, "../../../view/public/media/images")));
    //app.use(express.static(path.join(__dirname, '../public')));
    //app.get('/favicon.ico', (req, res) => res.status(204));

    app.use(cors())
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use(session({
         secret: process.env.SESSION_SECRET,
         resave: false,
         saveUninitialized: false
    }));    
}