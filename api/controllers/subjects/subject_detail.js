const { Mongoose } = require("mongoose");


const Subject = require('../../models/learn/subject');





exports.subject_get_detail = (req, res, next) => {
    Subject
    .findById(req.params.subjectId)
    .select("name description _id")
    .exec()
    .then(subject => {
        if (!subject) {
            return res.status(404).json({
                message: " subject not found"
            });
        }
        res.status(200).json({
            subject: subject,
            request: {
                type: "GET",
                url: 'http://localhost:3000/subject/subjects'
            }
        });
    })
    .catch(err => {
        res.status(500).json({
            error : err
        });
    });
}

