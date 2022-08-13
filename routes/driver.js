const express = require("express");
const {addDriver, getDrivers} = require("../controller/driver")

const router = express.Router();

router.post('/add', addDriver);
router.get('/', getDrivers)

module.exports = router;