const express = require("express");
const {addDriver, getDrivers, editDriver} = require("../controller/driver")

const router = express.Router();

router.post('/add', addDriver);
router.put('/edit/:id', editDriver);
router.get('/', getDrivers)

module.exports = router;