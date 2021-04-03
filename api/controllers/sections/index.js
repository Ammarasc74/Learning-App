const express = require('express');
const router = express.Router();


const createdSectionController = require('./add_section');
const getAllSectionsController = require('./sections');



router.get('/sections', getAllSectionsController.Section_get_All_Sections);

router.post('/addsection', createdSectionController.section_add_section);




module.exports = router;