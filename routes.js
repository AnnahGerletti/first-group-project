
var express = require('express')
var router = express.Router()
var data = require('./data.json')
var fs = require('fs')

router.get('/ptp', function(req, res) {
  res.render('postit/index.hbs', data)
})

//main pg
router.get('/ptp/:id', function(req, res){
  var id = req.params.id
  var singlePostit = data.postit.find(function(postitNote){
    return id == singlePostit.id
  })
  res.render('postit/edit', singlePostit)
})

//edit page without edit functionality
router.get('/ptp/edit/:id', function(req, res) {
  var id = req.params.id

  fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
    if (err) throw err
    var singlePostit = JSON.parse(data).postit.find(function(singlePostit){
      return id == singlePostit.id
    })
    res.render('postit/edit', singlePostit)
  })
})



//adds edit power
router.post('/ptp/edit/:id', function(req, res){
  var postitData = req.body
  var id = req.params.id
  var singlePostit = data.postit.find(function(singlePostit) {
    return id == singlePostit.id
  })

  singlePostit.comment = postitData.comment

  fs.writeFile('data.json', JSON.stringify(data), function(err){
    if (err) throw err
    res.redirect('/ptp')
  })
})


module.exports = router
