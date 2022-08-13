const express = require("express");
const {addShipment, updateShipment, getAllShipment} = require("../controller/shipment");

const router = express.Router();

router.post('/', addShipment)
router.put('/update/:id', updateShipment)
router.get('/all', getAllShipment)

module.exports = router;