const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../../models/user');

exports.get_all_users = (req, res, next) => {
    User.find()
    .select("fullName school email  password _id")
    .exec()
    .then( docs  => {
        const response = {
            count: docs.length,
            users: docs.map( doc =>{
                return {
                    fullName: doc.firstName,
                    email: doc.email,
                    school: doc.school,
                    password: doc.password,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/user/users' + doc._id
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