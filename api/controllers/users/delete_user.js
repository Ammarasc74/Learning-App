const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require( 'jsonwebtoken');

const User = require('../../models/users/user');



exports.user_delete_user =  (req, res, next) => {
    User.remove({ _id: req.params.userId})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'User Deleted'
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
}