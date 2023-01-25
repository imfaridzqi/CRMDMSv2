const express = require("express");
const router = express.Router();
const alumni = require("../controllers/alumni");
const catchAsync = require("../utils/catchAsync");
const {isLoggedIn} = require("../middleware");

router.route("/").get(isLoggedIn, catchAsync(alumni.index))
                .post(isLoggedIn, catchAsync(alumni.createNewData));

router.route("/new").get(isLoggedIn, catchAsync(alumni.renderNewForm));

router.route("/:id/edit").get(isLoggedIn, catchAsync(alumni.renderEditForm));

router.route("/:id").put(isLoggedIn, catchAsync(alumni.edit))
                    .delete(isLoggedIn, catchAsync(alumni.delete));

module.exports = router;