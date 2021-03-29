const { Mongoose } = require("mongoose");


const Semester = require('../../models/learn/semester');
const Subject = require('../../models/learn/subject');





exports.semester_get_semester = (req,res,next)=>{
    Semester
    .findById(req.params.semesterId)
    .populate('subject')
    .exec()
    .then(semester => {
        if (!semester) {
            return res.status(404).json({
                message: " Semester not found"
            });
        }
        res.status(200).json({
            semester: semester,
            request: {
                type: "GET",
                url: 'http://localhost:3000/semester/semesters'
            }
        });
    })
    .catch(err => {
        res.status(500).json({
            error : err
        });
    });
}

