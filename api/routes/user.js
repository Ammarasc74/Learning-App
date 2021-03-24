const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require( 'jsonwebtoken');


// const checkAuth = require('../middleware/check-auth');
const User = require('../models/user');


router.post("/signup",(req, res, next) => {
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
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
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
})





module.exports = router;