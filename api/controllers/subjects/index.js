const express = require('express');
const router = express.Router();
const checkAuth = require('../../middleware/check-auth');


const Subject = require('../../models/learn/subject');


const createSubjectController = require('./create_subject');
const getAllSubjectsController = require('./subjects');
const getSubjectDetailController = require('./subject_detail');


router.get('/subjects', getAllSubjectsController.subject_get_All);

router.get('/:subjectId', getSubjectDetailController.subject_get_detail);

router.post('/subjects', checkAuth, createSubjectController.subject_create_subject);



module.exports = router;