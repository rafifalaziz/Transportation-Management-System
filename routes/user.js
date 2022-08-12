const {user} = require("../controller");
const express = require("express");

const router = express.Router();

router.post('/register', user.addUser);

module.exports = router;