var request = require('supertest')
var test = require('tape')
var cheerio = require('cheerio')
var server = require("../server")
var data = require("../data.json")

test('check test setup is working', function(t) {
  t.pass()
  t.end()
})

test('test home page route', function(t) {
  request(server)
    .get('/ptp')
    .expect(200)
    .end(function(err, res) {
      console.log("hello");
      t.error(err)
      t.end()
    })
})

test('testing the submit button see if it take you back to home page', (t) => {
  request(server)
    .get('./ptp/edit/:id')
    .expect('/ptp')

  t.error(err)
  t.end()
})


test('checking comments display when submitted', (t) => {

t.deepequal()
})
