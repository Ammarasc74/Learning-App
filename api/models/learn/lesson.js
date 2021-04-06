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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PDF',
        required: true
    },
    test: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test',
        required: true
    }
    // videos
});

module.exports = mongoose.model('Lesson', lessonSchema);