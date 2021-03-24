const express = require('express');
const router = express.Router();



// const checkAuth = require('../middleware/check-auth');
const User = require('../models/user');
const createUserController = require('../controllers/users/create_user');
const getAllUserController = require('../controllers/users/users');


router.get("/users", getAllUserController.get_all_users);

router.post("/signup", createUserController.user_signup);


module.exports = router;