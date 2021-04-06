const mongoose = require('mongoose');

const testSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    question: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    }
});

module.exports = mongoose.model('Test', testSchema);