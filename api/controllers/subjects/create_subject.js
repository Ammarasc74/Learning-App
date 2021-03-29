const mongoose = require('mongoose');

const Subject = require('../../models/learn/subject');

exports.subject_create_subject = (req, res, next) => {
    const subject = new Subject({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description
    });
    subject
    .save()
    .then(result => {
        res.status(201).json({
            massage: "Subject created",
            createdSubject: {
                _id: result._id,
                name: result.name,
                description: result.description,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/subjects/' + result._id
                }
            }
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}