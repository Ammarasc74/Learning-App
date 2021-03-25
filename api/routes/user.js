const express = require('express');
const router = express.Router();



const checkAuth = require('../middleware/check-auth');
const User = require('../models/user');

const createUserController = require('../controllers/users/create_user');
const getAllUserController = require('../controllers/users/users');
const loginController = require('../controllers/users/login');
// const editUserController = require('../controllers/users/edit_user');
const deleteUserController = require('../controllers/users/delete_user');


router.get("/users", getAllUserController.get_all_users);

router.post("/signup", createUserController.user_signup);

router.post("/login", loginController.user_login )

// router.("/", loginController.user_login )

router.delete("/:userId", deleteUserController.user_delete_user )


module.exports = router;