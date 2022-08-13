const express = require("express");
const {addShipment, updateShipment, updateShipmentstatus} = require("../controller/shipment");

const router = express.Router();

router.post('/', addShipment)
router.put('/update/:id', updateShipment)
router.put('/status/:id', updateShipmentstatus)

module.exports = router;