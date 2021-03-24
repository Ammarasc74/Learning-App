const express = require('express');
const router = express.Router();



// const checkAuth = require('../middleware/check-auth');
const User = require('../models/user');
const UserController = require('../controllers/users/create_user');


// router.get("/users", UserController.get_all_users);

router.post("/signup", UserController.user_signup);


module.exports = router;