const express = require("express");
const {addShipment, updateShipment, updateShipmentstatus, getAllShipment} = require("../controller/shipment");

const router = express.Router();

router.post('/', addShipment)
router.put('/update/:id', updateShipment)
router.put('/status/:id', updateShipmentstatus)
router.get('/all', getAllShipment)

module.exports = router;