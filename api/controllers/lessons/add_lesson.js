const mongoose = require('mongoose');


const Lesson = require('../../models/learn/lesson');


exports.add_lesson = (req, res, next) => {
    const lesson = new Lesson({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        section: req.body.sectionId,
        // pdf: req.body.pdf,
        test: req.body.test
    });
    lesson
    .save()
    .then(result => {
        res.status(201).json({
            massage: "lesson added",
            createdLesson: {
                _id: result._id,
                name: result.name,
                section: result.sectionId,
                // pdf: result.pdf,
                test: result.test
            }
        });
    })
    .catch(err => {
        res.status(502).json({
            error: err
        });
    });
}
