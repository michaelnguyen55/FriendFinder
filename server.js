// Series of npm packages that will give server useful functionality
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express server configuration
var app = express();
// Sets an initial port for listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTER
// The below points the server to a series of "route" files.
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// The below code effectively "starts" the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});