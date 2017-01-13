var http = require('http');

var express = require('express');
var compression = require('compression');

var server = express();
server.use(compression());
server.use(express.static(__dirname + '/'));

var port = 5000;
server.listen(process.env.PORT || port);