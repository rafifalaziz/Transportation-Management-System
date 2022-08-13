const express = require("express");
const user = require("./user");
const truck = require("./truck");
const driver = require("./driver");
const shipment = require("./shipment");

const router = express.Router();

router.use('/auth', user);
router.use('/api/truck', truck);
router.use('/api/driver', driver);
router.use('/api/shipment', shipment);

module.exports = router;