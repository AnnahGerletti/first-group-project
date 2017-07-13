
var express = require('express')
var router = express.Router()
var data = require('./data.json')
var fs = require('fs')

router.get('/ptp', function(req, res) {
  res.render('postit/index.hbs', data)
})

router.get('/ptp/edit/:id', function(req, res) {
  var id = req.params.id
  var singlePostit = data.postit.find(function(singlePostit) {
    return id == singlePostit.id
  })
  res.render('postit/edit', singlePostit)
})



module.exports = router
