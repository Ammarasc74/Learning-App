const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../../models/user');

exports.user_signup = (req, res, next) => {
    User
    .find({email: req.body.email})
    .exec()
    .then(user => {
        if(user.length >=1) {
            return res.status(409).json({
                message: "mail exists"
            });
        }else {
            bcrypt.hash(req.body.password,10, function (err, hash) {
                  if(err) {
                      return res.status(500).json({
                      error: err
                    });
                    }else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            fullName: req.body.fullName,
                            userName: req.body.userName,
                            email: req.body.email,
                            school: req.body.school,
                            password: hash
                        });
                        user.save()
                        .then(result =>{
                            res.status(201).json({
                                message: "User Created"
                            });
                        })
                    }
                })
        }
    })
}