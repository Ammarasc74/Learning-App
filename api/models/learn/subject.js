const mongoose = require('mongoose');


const subjectSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
            type: 'string',
            required: true,
            updated: {
                type: Date,
                default: Date.now
            },
    },
    description: {
        type: 'string',
        },
});



module.exports = mongoose.model('Subject', subjectSchema);