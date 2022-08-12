const {truck} = require("../controller");
const express = require("express");

const router = express.Router();

router.post('/add', truck.addTruck);
router.post('/addPlate', truck.addPlate);
router.post('/addTruckType', truck.addTruckType);
router.put('/edit/:id', truck.editTruck);
router.get('/all', truck.getAllTruck);


module.exports = router;