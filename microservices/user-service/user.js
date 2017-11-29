var express = require('express');
var app = express();

var usersLogger = function (req, res, next) {
  var today = new Date();
  console.log('USERS_LOGGER at');
};

app.use(usersLogger);

app.get('/', function (req, res) {
  var users = require('./data-source');
  res.json(users);
});

app.listen(9001);