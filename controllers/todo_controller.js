var express = require('express')
var path = require('path')
var models = require('../models')

var router = express.Router()

router.get('/', function(req, res) {
	models.Task.findAll({})
	.then(function(tasks) {
		// res.json(tasks)
		res.render('index', {tasks: tasks})
	})
	
})

router.post('/new', function(req, res) {
	models.Task.create({
		name: req.body.name,
		completed: req.body.boolean
	}).then(function(){
		res.redirect('/')
	})
})

router.put('/update/:id', function(req, res) {
	// var bodyID = req.body.id
	// res.json(req.body)
	models.Task.update({
		completed: true
	}, 
	{where: {id: req.params.id}}
	)
	.then(function() {
		res.redirect('/')
	})
	
})

module.exports = router