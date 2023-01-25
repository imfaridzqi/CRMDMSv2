const express = require("express");
const router = express.Router();
const chart = require("../controllers/chart");
const catchAsync = require("../utils/catchAsync");
const {isLoggedIn} = require("../middleware");

router.route("/").get(isLoggedIn, catchAsync(chart.index));
router.route("/sumber").get(isLoggedIn, catchAsync(chart.sumber));

module.exports = router;