const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const user = require("../controllers/user");
const passport = require("passport");

router.route("/register")
    .get(user.renderRegisterForm)
    .post(catchAsync(user.register));

router.route("/login")
    .get(user.renderLoginForm)
    .post(passport.authenticate("local", {failureFlash: true, failureRedirect: "/user/login"}), user.login);

router.get("/logout", user.logout);

module.exports = router;