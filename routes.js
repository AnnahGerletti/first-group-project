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

router.get('/', function(req, res){
  res.redirect('/ptp')
})

router.get('/ptp', function(req, res) {
  readData(function(data) {
    res.render('postit/index.hbs', data)
  })
})

//main pg
router.get('/ptp/:id', function(req, res){
  var id = req.params.id
  readData(function(data) {
    var singlePostit = data.postit.find(function(postitNote){
      return id == singlePostit.id
    })
    res.render('postit/edit', singlePostit)
  })
})

//edit page without edit functionality
router.get('/ptp/edit/:id', function(req, res) {
  var id = req.params.id
  readData(function(data) {
    var singlePostit = data.postit.find(function(singlePostit){
      return id == singlePostit.id
    })
    res.render('postit/edit', singlePostit)
  })
})



//adds edit power
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
//
// router.get('/', function(req, res) {
//   res.render('postit/index.hbs', data)
// })



module.exports = router
