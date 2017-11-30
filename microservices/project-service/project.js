var express = require('express');
var app = express();

var projectsLogger = function (req, res, next) {
  var today = new Date();
  console.log('PROJECTS_LOGGER at ' + today.toISOString());
  next();
}

app.use(projectsLogger);

app.get('/', function (req, res) {
  var projects = require('./data-source');
  res.json(projects);
})

app.listen(9002);
console.log('Project service is running at http://localhost:9002');
