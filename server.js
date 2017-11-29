var express = require('express');

var home = require('./routes/home');
var users = require('./routes/user');
var projects = require('./routes/project');

var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use('/', home);
app.use('/user-page', users);
app.use('/project-page', projects);

app.listen(8080);