const {user} = require("../controller");
const express = require("express");
const {login} = require("../controller/auth")

const router = express.Router();

router.post('/register', user.addUser);
router.post('/login', login);

module.exports = router;