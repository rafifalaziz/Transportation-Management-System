const express = require("express");
const {addShipment} = require("../controller/shipment");
const { route } = require("./user");

const router = express.Router();

router.post('/', addShipment)

module.exports = router;