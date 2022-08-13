const express = require("express");
const {addDriver, getDrivers} = require("../controller/driver")
const {auth} = require("../middleware");

const router = express.Router();

router.post('/add', auth.transporterRole, addDriver);
router.get('/', auth.transporterRole, getDrivers)

module.exports = router;