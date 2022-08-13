const express = require("express");

const router = express.Router();

router.post('/add', addDriver);
router.get('/', getDrivers)
router.get('/search', searchDriverByName)
const {addDriver, getDrivers, editDriver, searchDriverByName} = require("../controller/driver")

const router = express.Router();

router.post('/add', auth.transporterRole, addDriver);
router.put('/edit/:id', auth.transporterRole, editDriver);
router.get('/', auth.transporterRole, getDrivers)


module.exports = router;