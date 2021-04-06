const Question = require('../../models/questions/question');




exports.all_question = (req, res, next) => {
    Question
    .find()
    .select("text type correctAnswer wrongAnswer1 wrongAnswer2 wrongAnswer3 _id")
    .exec()
    .then(docs => {                
        res.status(200).json({     
            count: docs.length,
            questions: docs.map( doc => { 
                return {
                    _id: doc._id,
                    text: doc.text,
                    type: doc.type,
                    correctAnswer: doc.correctAnswer,
                    wrongAnswer1: doc.wrongAnswer1,
                    wrongAnswer2: doc.wrongAnswer2,
                    wrongAnswer3: doc.wrongAnswer3,
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