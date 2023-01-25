const express = require("express");
const router = express.Router();
const closing = require("../controllers/closing");
const catchAsync = require("../utils/catchAsync");
const {isLoggedIn} = require("../middleware");

router.route("/").get(isLoggedIn, catchAsync(closing.index));

module.exports = router;