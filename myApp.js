var express = require('express');
var helmet = require('helmet');
var app = express();
app.use(express.json());

// hidePoweredBy() - hide header letting everyone know 
// the app was made by using Express 
app.use(helmet.hidePoweredBy());

// frameguard() - against clickjacking (sets x-frame-options header),
// typical clickjacking attack includes setting an invisible Iframe or
// frame over visible objects, which contains objects from another website

// For example, clicking a button on the website doesn't do what you think
// it does (submits some data), but instead there is an invisible button over
// it that likes someone's Facebook post
app.use(helmet.frameguard({ action: 'deny '}));















































module.exports = app;
var api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
