const express = require('express');
const router = express.Router();




const addQuestionController = require('./add_question');
const allQuestionController = require('./all_question');


router.get('/questions', allQuestionController.all_question);
router.post('/add', addQuestionController.add_question);


module.exports = router;