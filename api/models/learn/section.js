const mongoose = require('mongoose');

const sectionSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: 'string',
        required: true,
    },
    semester: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Semester',
        required: true
    }
});

module.exports = mongoose.model('Section', sectionSchema);