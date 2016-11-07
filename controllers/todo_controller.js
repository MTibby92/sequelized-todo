var express = require('express')
var path = require('path')
var models = require('../models')

var router = express.Router()

router.get('/', function(req, res) {
	models.Task.findAll({})
	.then(function(tasks) {
		res.json(tasks)
	})
	
})

router.post('/new', function(req, res) {
	todo.insertOne(req.body.name, req.body.boolean, function() {
		res.redirect('/')
	})
})

router.put('/update/:id', function(req, res) {
	todo.updateOne(req.params.id, 'completed', true, function() {
		res.redirect('/')
	})
})

module.exports = router