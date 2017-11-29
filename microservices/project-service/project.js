var express = require('express');
var app = express();

var projectsLogger = function (req, res, next) {
  console.log('PROJECTS_LOGGER');
  next();
}

app.use(projectsLogger);

app.get('/', function (req, res) {
  var projects = require('./data-source');
  res.json(projects);
})

app.listen(9002);