const express = require("express");
const user = require("./user");
const truck = require("./truck");
const driver = require("./driver")

const router = express.Router();

router.use('/auth', user);
router.use('/api/truck', truck);
router.use('/api/driver', driver);

module.exports = router;