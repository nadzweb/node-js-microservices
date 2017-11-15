var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/project-service', function (req, res) {
  res.send('PROJECT>>> SERVICE... ')
})

app.listen(9002);