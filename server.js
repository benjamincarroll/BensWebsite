var express = require('express');
var fs = require('fs');
//var request = require('request');
//cheerio = require('cheerio');
var app = express();
var mongoose = require('mongoose');
console.log("well hello there");

// configuration =================

var port = process.env.PORT || 9090;

// Connect to the db
mongoose.connect("mongodb://localhost:27017/BensWebsite", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});



app.configure(function () {
 app.use(express.static(__dirname + '/public'));
 app.use(require('prerender-node').set('prerenderToken', '2HzURwBkqwsct8qtViw4'));
 app.use(express.bodyParser());
 app.use(app.router);
 app.use(express.methodOverride());
});

//routes
// I am going to need this soon
//require('./app/routes')(app);

// setup server and listen on ports
app.listen(port);

console.log('Magic happens on port 8081');
exports = module.exports = app;
