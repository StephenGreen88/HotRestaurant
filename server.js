// Require in the necessary dependencies and set variables and define PORT
// =================================================
var express = require('express');

// Tells node that we are creating an express server
var app = express();
// Set the intial port. We'll use this in the listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// The below points the server to a series for 'route' files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// =================================================
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes')(app);


// Listener
// The code below effectively 'starts' the server
// =================================================
app.listen(PORT, function () {
    console.log('App is listening on PORT: ' + PORT);
});