const mongoose = require('mongoose');


const QuestionsSchema = mongoose.Schema ({
  _id:  mongoose.Schema.Types.ObjectId,
  text: {
          type: 'string'
        },
  type: {
          type: 'string',
          required: true
        },
  correctAnswer: {
          type: 'string',
          required: true
        },
  wrongAnswer1: {
          type: 'string',
          required: true
        },
  wrongAnswer2: {
          type: 'string',
          required: true
        },
  wrongAnswer3: {
          type: 'string',
          required: true
        },
  addedAt: {
          type: Date,
          default: Date.now
        },
});

module.exports = mongoose.model("Question", QuestionsSchema);

