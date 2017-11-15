var express = require('express');

var users = require('./routes/user');

var app = express();

// page routes
app.use('/user-page', users);


// api routes

app.listen(8080);