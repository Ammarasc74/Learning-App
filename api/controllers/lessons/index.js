const express = require('express');
const router = express.Router();




const addLessonController = require('./add_lesson');
const allLessonsController = require('./lessons');


router.get('/lessons', allLessonsController.all_lessons);
router.post('/add', addLessonController.add_lesson);


module.exports = router;