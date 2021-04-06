const mongoose = require('mongoose');

const pdfSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String
    },
});

module.exports = mongoose.model('PDF', pdfSchema);