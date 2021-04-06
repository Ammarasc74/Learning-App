const mongoose = require('mongoose');

const Section = require('../../models/learn/section');
const Semester = require('../../models/learn/semester');



exports.section_add_section = (req, res, next) => {
    Semester
    .findById(req.body.semesterId)
    .then( semester => { 
            if (!semester) {
                return res.status(404).json({
                    message: "semester not found" 
                });
            }
            const section = new Section({  
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                semester: req.body.semesterId
        })      
        return section.save();
    })     
        .then(result => {
           res.status(201).json({
              message: 'Section  added',
                CreatedSection: { 
                    _id: result._id,
                    name: result.name,
                    semester: result.semesterId
            }, 
        }); 
    })
    .catch(err => { 
            res.status(501).json({ 
                error:err
            });
    });
}

