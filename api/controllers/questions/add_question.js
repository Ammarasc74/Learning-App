const mongoose = require('mongoose');


const Question = require('../../models/questions/question');


exports.add_question = (req, res, next) => {
    const question = new Question({
        _id: new mongoose.Types.ObjectId(),
        text: req.body.text,
        type: req.body.type,
        correctAnswer: req.body.correctAnswer,
        wrongAnswer1: req.body.wrongAnswer1,
        wrongAnswer2: req.body.wrongAnswer2,
        wrongAnswer3: req.body.wrongAnswer3,
    })
    question
    .save()
    .then(result => {
        res.status(201).json({
            massage: "question added",
            createdQuestion: {
                _id: result._id,
                text: result.text,
                type: result.type,
                correctAnswer: result.correctAnswer,
                wrongAnswer1: result.wrongAnswer1,
                wrongAnswer2: result.wrongAnswer2,
                wrongAnswer3: result.wrongAnswer3,
            }
        });
    })
    .catch(err => {
        res.status(502).json({
            error: err
        });
    });

}
