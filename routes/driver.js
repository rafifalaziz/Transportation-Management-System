const express = require("express");
const {addDriver, getDrivers, editDriver, searchDriverByName} = require("../controller/driver")
const {auth} = require("../middleware");


const router = express.Router();


router.get('/search', auth.transporterRole, searchDriverByName)
router.post('/add', auth.transporterRole, addDriver);
router.put('/edit/:id', auth.transporterRole, editDriver);
router.get('/', auth.transporterRole, getDrivers)


module.exports = router;