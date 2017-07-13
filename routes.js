
var express = require('express')
var router = express.Router()
var data = require('./data.json')
var fs = require('fs')

router.get('/ptp', function(req, res) {
  res.render('postit/index.hbs', data)
})



module.exports = router
