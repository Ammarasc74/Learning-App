const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../../models/user');
const user = require('../../models/user');

exports.get_all_users = (req, res, next) => {
    User.find()
    .select("fullName userName school email  password _id")
    .exec()
    .then( docs  => {
        const response = {
            count: docs.length,
            users: docs.map( doc =>{
                return {
                    fullName: doc.fullName,
                    userName: doc.userName,
                    email: doc.email,
                    phoneNumber: doc.phoneNumber,
                    school: doc.school,
                    password: doc.password,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/user/users/' + doc._id
                    }
                }
            })
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
}

exports.user_detail = (req, res, next) => {
    const id = req.params.userId;
        User.findById(id)
        .select("fullName userName phoneNumber school email  password _id")
        .exec()
        .then( doc => {
            if (doc) {
                res.status(200).json({
                    count: user.position,
                    user: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/user/users/'
                    }
                });
            }else {
                res.status(404).json({
                    message: 'no valid data'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });

}