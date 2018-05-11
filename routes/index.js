var express = require('express');
var router = express.Router();
const {models} = require('../models/index.js')

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', { title: 'Quiz'});
});

/*GET credits page. */
router.get('/credits', (req, res, next) => {
	res.render('credits');
});

/*GET quizzes page. */
router.get('/quizzes', (req, res, next) => {
	
	models.quiz.findAll()
	.then(quizzes => {
		res.render('quizzes/index.ejs', {quizzes});
	})
	.catch(err => {
		next(err);
	});
});

	

module.exports = router;
