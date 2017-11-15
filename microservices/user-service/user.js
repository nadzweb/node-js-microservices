var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  var users = require('./data-source');
  res.json(users);
})

app.listen(9001);