

var express = require('express')
var router = express.Router()
// var data = require('./data.json')
var fs = require('fs')

router.get('/', function(req, res) {
  res.send('Hello world')
})
module.exports = router
