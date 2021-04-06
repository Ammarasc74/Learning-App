const express = require('express');
const router = express.Router();




const addPdfController = require('./add_pdf');
const allPdfController = require('./all_pdf');


router.get('/allpdf', allPdfController.all_pdf);
router.post('/addpdf', addPdfController.add_pdf);


module.exports = router;