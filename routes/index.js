const express = require('express')
const router = express.Router()
// could use one line instead: const router = require('express').Router();
const path = require('path')

const tweetBank = require('../tweetBank')

router.use('/static', express.static(path.join(__dirname, '/public')))

router.get('/', function (req, res) {
  let tweets = tweetBank.list()
  res.render('index', { tweets: tweets })
})

module.exports = router
