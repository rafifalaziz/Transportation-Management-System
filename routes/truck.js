const {truck} = require("../controller");
const express = require("express");

const {auth} = require("../middleware");

const router = express.Router();

router.post('/add', auth.transporterRole, truck.addTruck);
router.post('/addPlate', auth.transporterRole, truck.addPlate);
router.post('/addTruckType', auth.transporterRole, truck.addTruckType);
router.put('/edit/:id', auth.transporterRole, truck.editTruck);
router.get('/all', auth.transporterRole, truck.getAllTruck);
router.get('/get-one/:id', auth.transporterRole, truck.getTruck);
router.get('/search', auth.transporterRole, truck.searchTruckByName)


module.exports = router;