// Require in the necessary dependencies and set variables and define PORT
// =================================================
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// Parse application JSON
// =================================================
app.use(bodyParser.json())

// Include route files in the server
// =================================================
require('./app/routing/html-routes')(app);

// Listen 
// =================================================
app.listen(PORT, function() {
    console.log('App is listening on PORT: ' + PORT);
});