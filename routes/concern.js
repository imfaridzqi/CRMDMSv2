const express = require("express");
const router = express.Router();
const concern = require("../controllers/concern");
const catchAsync = require("../utils/catchAsync");
const {isLoggedIn} = require("../middleware");

router.route("/")
    .get(isLoggedIn, catchAsync(concern.index))
    .post(isLoggedIn, catchAsync(concern.createConcern));

router.get("/:id/edit", isLoggedIn, catchAsync(concern.renderEditForm));

router.route("/:id")
    .put(isLoggedIn, catchAsync(concern.edit))
    .delete(isLoggedIn, catchAsync(concern.delete));

module.exports = router;