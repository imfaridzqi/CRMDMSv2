const express = require("express");
const router = express.Router();
const program = require("../controllers/program");
const catchAsync = require("../utils/catchAsync");
const {isLoggedIn} = require("../middleware");


router.route("/")
    .get(isLoggedIn, catchAsync(program.index))
    .post(isLoggedIn, catchAsync(program.create));

router.get("/:id/edit", isLoggedIn, catchAsync(program.renderEditForm));

router.route("/:id")
    .put(isLoggedIn, catchAsync(program.edit))
    .delete(isLoggedIn, catchAsync(program.delete));


module.exports = router;