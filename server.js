var express = require('express');
var netApi = require('net-browserify');
 
// Create our app
var app = express();
 
app.use(netApi({allowOrigin: '*'}));
 
// Start the server
var server = app.listen(3000, function() {
    console.log('Server listening on port ' + server.address().port);
});