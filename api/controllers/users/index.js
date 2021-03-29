const express = require('express');
const router = express.Router();



const checkAuth = require('../../middleware/check-auth');
const User = require('../../models/users/user');

const createUserController = require('./create_user');
const getAllUserController = require('./all_users');
const getUserDetailController = require('./all_users');
const loginController = require('./login');
const editUserController = require('./edit_user');
const userChangeController = require('./change_password');
const deleteUserController = require('./delete_user');


router.get("/users", checkAuth, getAllUserController.get_all_users);

router.get("/users/:userId", checkAuth, getUserDetailController.user_detail);

router.post("/signup", createUserController.user_signup);

router.post("/login", loginController.user_login );

router.patch("/users/:userId", checkAuth, editUserController.user_edit_user );

router.patch("/changepassword/:userId", checkAuth, userChangeController.user_change_password );

router.delete("/:userId", checkAuth, deleteUserController.user_delete_user );


module.exports = router;