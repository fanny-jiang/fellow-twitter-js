const express = require('express')
const router = express.Router()
// could use one line instead: const router = require('express').Router();

const tweetBank = require('../tweetBank')

router.get('/', function (req, res) {
  let tweets = tweetBank.list()
  // let names = tweets.forEach((tweet) => { return tweet[name] })
  // console.log('names: ', names)
  res.render('index', { tweets: tweets })
})

router.get('/users/:name', function(req, res) {
  var name = req.params.name
  var tweets = tweetBank.find( { name: name })
  console.log('list: ', tweets)
  res.render('index', { tweets: tweets })
})

router.get('/tweets/:id', function(req, res) {

})

module.exports = router
