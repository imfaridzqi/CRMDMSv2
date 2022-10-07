const express = require("express");
const router = express.Router();
const status = require("../controllers/status");
const catchAsync = require("../utils/catchAsync");
const {isLoggedIn} = require("../middleware");

router.route("/")
    .get(isLoggedIn, catchAsync(status.index))
    .post(isLoggedIn, catchAsync(status.create));

router.get("/:id/edit", isLoggedIn, catchAsync(status.renderEditForm));

router.route("/:id")
    .put(isLoggedIn, catchAsync(status.edit))
    .delete(isLoggedIn, catchAsync(status.delete));

module.exports = router;