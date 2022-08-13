const express = require("express");
const {addDriver, getDrivers} = require("../controller/driver")
const {auth} = require("../middleware");

const router = express.Router();

router.post('/add', auth.shipperRole, addDriver);
router.get('/', auth.shipperRole, getDrivers)

module.exports = router;