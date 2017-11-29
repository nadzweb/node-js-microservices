var express = require('express')
var router = express.Router();
var request = require('request');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.render('user-page');
});

// api routes
router.get('/api', function (req, res) {
  var USER_SERVICE_URI = 'http://localhost:9001/';
  request.get({url:USER_SERVICE_URI, json:true}, function (error, response, users) {
    res.status(200).json(users);
  });
});

module.exports = router;
