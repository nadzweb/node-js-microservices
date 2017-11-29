var express = require('express');
var net = require('net');
var jSocket = require('json-socket');
var router = express.Router();
var request = require('request');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Project home page')
})

// api routes
router.get('/api', function (req, res) {
  getResponseFromSocket();
});

function getResponseFromSocket(res) {
  var port = 9002;
  var host = '127.0.0.1';
  var socket = new jSocket(new net.Socket()); //Decorate a standard net.Socket with JsonSocket
  socket.connect(port, host);
  socket.on('connect', function() {
      socket.sendMessage('projects');
      socket.on('message', function(results) {
          res.send(results);
      });
  });
}

module.exports = router;
