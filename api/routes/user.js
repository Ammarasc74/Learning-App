const express = require('express');
const router = express.Router();



const checkAuth = require('../middleware/check-auth');
const User = require('../models/user');

const createUserController = require('../controllers/users/create_user');
const getAllUserController = require('../controllers/users/all_users');
const getUserDetailController = require('../controllers/users/all_users');
const loginController = require('../controllers/users/login');
const editUserController = require('../controllers/users/edit_user');
const userChangeController = require('../controllers/users/change_password');
const deleteUserController = require('../controllers/users/delete_user');


router.get("/users", getAllUserController.get_all_users);

router.get("/users/:userId", getUserDetailController.user_detail);

router.post("/signup", createUserController.user_signup);

router.post("/login", loginController.user_login );

router.patch("/users/:userId", editUserController.user_edit_user );

router.patch("/changepassword/:userId", userChangeController.user_change_password );

router.delete("/:userId", deleteUserController.user_delete_user );


module.exports = router;