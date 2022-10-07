const express = require("express");
const router = express.Router();
const sumber = require("../controllers/sumber");
const catchAsync = require("../utils/catchAsync");
const {isLoggedIn} = require("../middleware");

router.route("/")
    .get(isLoggedIn, catchAsync(sumber.index))
    .post(isLoggedIn, catchAsync(sumber.create));

router.get("/:id/edit", isLoggedIn, catchAsync(sumber.renderEditForm));

router.route("/:id")
    .put(isLoggedIn, catchAsync(sumber.edit))
    .delete(isLoggedIn, catchAsync(sumber.delete));

module.exports = router;