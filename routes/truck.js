const {truck} = require("../controller");
const express = require("express");

const {auth} = require("../middleware");

const router = express.Router();

router.post('/add', truck.addTruck);
router.post('/addPlate', truck.addPlate);
router.post('/addTruckType', truck.addTruckType);
router.put('/edit/:id', truck.editTruck);
router.get('/all', truck.getAllTruck);
router.get('/get-one/:id', truck.getTruck);
router.get('/search', truck.searchTruckByName)


module.exports = router;