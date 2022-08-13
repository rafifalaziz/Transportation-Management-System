const {driver} = require("../controller");
const express = require("express");

const router = express.Router();

router.post('/add', driver.addDriver);
