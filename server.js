// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var mongoose = require('mongoose');
var express    = require('express');    // call express
var app        = express();         // define our app using express
var bodyParser = require('body-parser');

// Connect to the db
mongoose.connect("mongodb://localhost:27017/BensWebsite", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

var port = process.env.PORT || 8080;    // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();        // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api! YEAH!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
