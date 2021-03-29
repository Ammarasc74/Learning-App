const express = require('express');
const { route } = require('../subjects/index');
const router = express.Router();


const createdSemesterController = require('./add_semester');
const getAllSemestersController = require('./semesters');
const getSemestersdetailController = require('./semester_detail');




router.get('/semesters', getAllSemestersController.semester_get_All_semesters);

router.get('/:semesterId', getSemestersdetailController.semester_get_semester);

router.post('/addsemester', createdSemesterController.semester_add_semester);




module.exports = router;