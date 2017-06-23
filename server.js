const path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(port, function() {
	console.log("The server is running on port " + port + "!");
});