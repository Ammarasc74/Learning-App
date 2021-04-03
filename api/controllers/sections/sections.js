const { Mongoose } = require("mongoose");


const Section = require('../../models/learn/section');

exports.section_get_All = (req, res, next) => {
    Section
    .find()
    .select("name sectionId _id")
    .populate('Semester','name')
    .exec()
    .then(docs => {                
        res.status(200).json({     
            count: docs.length,
            semesters: docs.map( doc => { 
                return {
                    _id: doc._id,
                    semester: doc.semester,
                    name: doc.name,
                    request: {  
                        type: 'GET',
                        url: 'http://localhost:3000/section/' + doc._id
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