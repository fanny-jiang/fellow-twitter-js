const express = require('express')
const app = express()

const morgan = require('morgan')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')

const routes = require('./routes')

// nunjucks stuff
app.set('view engine', 'html') // have res.render work with html files
app.engine('html', nunjucks.render) // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

// middleware logging
app.use(morgan('dev'))

// body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// mount routes from index.js
app.use('/', routes)

// serve static files
app.use(express.static('public'))

/*
manual static file routing:
// built-in node things:
const fs = require('fs')
const path = require('path')

const mime = require('mime') // npm install mime --save

app.use(function(req, res, next) {
	var mimeType = mime.lookup(req.path)
	fs.readFile('./public' + req.path, function(err, fileBuffer) {
		if (err) return next()
		res.header('Content-Type', mimeType)
		res.send(fileBuffer)
	})
})
*/

// app.get('/', function(req, res) {
//   res.send('welcome')
// })

/* vvvv Nunjucks HTML render example vvvv */

// app.get('/', function(req, res) {
//   const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }]
//   res.render('index', { title: 'Hall of Fame', people: people })
// })

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// }

// nunjucks.render('index.html', locals, function(err, output) {
//     if (err) return console.error(err);
//     console.log(output);
// })

/* ^^^^ Nunjucks HTML render example ^^^^ */

app.listen(3000, function() {
  console.log('listening on port 3000')
})
