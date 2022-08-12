const {truck} = require("../controller");
const express = require("express");

const router = express.Router();

router.post('/add', truck.addTruck);
router.post('/addPlate', truck.addPlate);
router.post('/addTruckType', truck.addTruckType);

module.exports = router;