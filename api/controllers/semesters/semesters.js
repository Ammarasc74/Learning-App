const { Mongoose } = require("mongoose");


const Semester = require('../../models/learn/semester');

exports.semester_get_All_semesters = (req, res, next) => {
    Semester
    .find()
    .select("name subjectId _id")
    .populate('subject','name')
    .exec()
    .then(docs => {                
        res.status(200).json({     
            count: docs.length,
            semesters: docs.map( doc => { 
                return {
                    _id: doc._id,
                    subject: doc.subject,
                    name: doc.name,
                    request: {  
                        type: 'GET',
                        url: 'http://localhost:3000/semester/' + doc._id
                    } 
                } 
            }) 
        });  
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    }) 
}