const express = require("express");
const {addShipment, updateShipment} = require("../controller/shipment");

const router = express.Router();

router.post('/', addShipment)
router.put('/update/:id', updateShipment)

module.exports = router;