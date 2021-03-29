const mongoose = require('mongoose');

const Semester = require('../../models/learn/semester');
const Subject = require('../../models/learn/subject');


exports.semester_add_semester = (req, res, next) => {
    Subject
    .findById(req.body.subjectId)
    .then( subject => { 
            if (!subject) {
                return res.status(404).json({
                    message: " subject not found" 
                });
            }
            const semester = new Semester({  
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                subject: req.body.subjectId
        })      
        return semester.save();
    })     
        .then(result => {
           res.status(201).json({
              message: 'semester  added',
                CreatedSemester: { 
                    _id: result._id,
                    name: result.name,
                    subject: result.subjectId
            }, 
        }); 
    })
    .catch(err =>{ 
            res.status(501).json({ 
                error:err
            })  
    });
}

