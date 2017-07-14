
var express = require('express')
var router = express.Router()
var fs = require('fs')

function readData (callback) {
  fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
    if (err) throw err
    callback(JSON.parse(data))
  })
}

function writeData(data, callback) {
  fs.writeFile(__dirname + '/data.json', JSON.stringify(data), (err) => {
    if (err) throw err
    callback()
  })
}

//main page
router.get('/ptp', function(req, res) {
  readData(function(data) {
    res.render('postit/index.hbs', data)
  })
})

//displays edit page without edit functionality
router.get('/ptp/edit/:id', function(req, res) {
  var id = req.params.id
  readData(function(data) {
    var singlePostit = data.postit.find(function(singlePostit){
      return id == singlePostit.id
    })
    res.render('postit/edit', singlePostit)
  })
})

//adds edit functionality
router.post('/ptp/edit/:id', function(req, res){
  var postitData = req.body
  var id = req.params.id
  readData(function(data) {
    var singlePostit = data.postit.find(function(singlePostit) {
      return id == singlePostit.id
    })
    singlePostit.comment = postitData.comment
    writeData(data, function() {
      res.redirect('/ptp')
    })
  })
})


module.exports = router
