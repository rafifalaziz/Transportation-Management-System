const express = require("express");
const {addDriver, getDrivers, searchDriverByName} = require("../controller/driver")

const router = express.Router();

router.post('/add', addDriver);
router.get('/', getDrivers)
router.get('/search', searchDriverByName)

module.exports = router;