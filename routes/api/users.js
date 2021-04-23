const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");

//post /api/users/signup
router.post("/signup", usersCtrl.create);

//post /api/users/login
router.post("/login", usersCtrl.login);

module.exports = router;
