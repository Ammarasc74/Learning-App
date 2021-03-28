const mongoose = require('mongoose');



const User = require('../../models/user');



exports.user_edit_user = (req,res,next) =>{
    const id = req.params.userId;
    const updateDoc = {};
    for (const doc of req.body) {
        updateDoc [doc.propName] = doc.value;
    }
    User.updateMany({ _id: id} , { $set: updateDoc })
    .exec()
    .then(result =>{
        
        res.status(200).json({
            message: 'User updated'
        });
    })
    .catch( err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}