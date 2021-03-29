const mongoose = require('mongoose');

const semesterSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: 'string',
        required: true,
    },
    subject: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    }
});

module.exports = mongoose.model('Semester', semesterSchema);