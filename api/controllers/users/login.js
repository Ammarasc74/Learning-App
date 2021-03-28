const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
   

const User = require('../../models/user');   
  
  
exports.user_login = (req, res, next) => {
      
    User
    .find({userName: req.body.userName})    
    .exec() 
    .then(user => {     
        if(user.length < 1) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.status(402).json({
                    message: "Auth failed"
                });
            }
            if (result) {
                const token = jwt.sign({
                    email: user[0].email,
                    _id: user[0]._id
                },
                process.env.JWT_KEY,
                {
                    expiresIn: "1d"
                }
                );
                return res.status(200).json({
                    message: "Auth succecfull",
                    token: token
                });
            }
            return res.status(401).json({
                message: "Auth failed"
            });
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
}