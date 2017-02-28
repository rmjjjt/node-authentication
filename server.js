// =======================
// get the packages we need ============
// =======================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken'); // create, sign and verify tokens
var config = require('./config'); // get config file
var User = require('./app/models/user'); //get mongoose model

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // create, sign and verify tokens
mongoose.connect(config.database); // db connect
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// =======================
// routes ================
// =======================
// basic route
app.get('/', function(req, res) {
    res.send('Hello! The Api is at http://localhost:' + port + '/api/');
});

//API routes

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);