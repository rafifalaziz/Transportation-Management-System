const express = require("express");

const {addDriver, getDrivers, editDriver} = require("../controller/driver")
const {auth} = require("../middleware");
const router = express.Router();

router.post('/add', auth.shipperRole, addDriver);
router.put('/edit/:id', auth.shipperRole, editDriver);
router.get('/', auth.shipperRole, getDrivers)

module.exports = router;