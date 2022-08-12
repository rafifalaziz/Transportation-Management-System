const {truck} = require("../controller");
const express = require("express");

const router = express.Router();

router.post('/add', truck.addTruck);

module.exports = router;