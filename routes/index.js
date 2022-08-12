const express = require("express");
const user = require("./user");
const truck = require("./truck");


const router = express.Router();

router.use('/auth', user);
router.use('/api/truck', truck);

module.exports = router;