const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../models/users/user');


exports.user_change_password = (req,res,next) =>{
    const id = req.params.userId;
    const updatePass = {};
    for (const password of req.body) {
        updatePass [password.propName] = password.value;
    }
    User
    .updateOne({ _id: id} , { $set: updatePass })
    .exec()
    .then(result =>{
        res.status(201).json({
            message: "Great! password changed succesfully"
        });
    })
    .catch( err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}