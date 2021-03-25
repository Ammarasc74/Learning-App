const mongoose = require('mongoose');

const userSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: {
        type: 'string',
        requried: true,
    },
    userName: {
        type: 'string',
        requried: true,
    },
    email: {
        type: 'String',
        requried: true,
        uniqe: true
    },
    phoneNumber: {
        type: 'String',
        requried: true,
        uniqe: true
    },
    school: {
        type: 'String',
        requried: true,
        uniqe: true
    },
    password: {
        type: 'String',
         required: true
        }
});

module.exports = mongoose.model('User', userSchema);