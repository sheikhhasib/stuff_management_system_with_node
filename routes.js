const express = require('express');
const UserController = require('./controller/UserController');

const router = express.Router();


//user section
router.post("/user/create", UserController.createUser);

module.exports = router;