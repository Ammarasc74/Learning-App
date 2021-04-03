const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: 'string',
        required: true,
    },
    section: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: true
    },
    pdf: {
        type: 'string',
        required: true
    },
    test: {
        // qus , answers

    },
    video: {

    }
});

module.exports = mongoose.model('Lesson', lessonSchema);