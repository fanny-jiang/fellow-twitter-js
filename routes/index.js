const express = require('express')
const router = express.Router()
// could use one line instead: const router = require('express').Router();

const tweetBank = require('../tweetBank')

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list()
  console.log('tweets', tweets)
  res.render('index', { tweets: tweets, showForm: true })
  next()
})

router.get('/users/:name', function(req, res, next) {
  var name = req.params.name
  var tweets = tweetBank.find( { name: name })
  console.log('list: ', tweets)
  res.render('index', { tweets: tweets, showForm: false })
  next()
})

router.get('/tweets/:id', function(req, res, next) {
  var tweetId = Number(req.params.id) // req.params.id returns a string, but .find() takes a number id. need to make sure the type matches so that the .find() function is able to find the tweet by a number id
  var tweetById = tweetBank.find({ id: tweetId })
  res.render('index', { tweets: tweetById })
  next()
})

module.exports = router
