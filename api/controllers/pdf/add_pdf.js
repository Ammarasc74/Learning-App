const mongoose = require('mongoose');

const PDF = require('../../models/learn/pdf');

exports.add_pdf = (req, res, next) => {
    const pdf = new PDF({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        content: req.body.content
    });
    pdf
    .save()
    .then(result => {
        res.status(201).json({
            massage: "pdf created",
            createdSubject: {
                _id: result._id,
                name: result.name,
                content: result.content,
            }
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}